import prisma from "../db/prisma.js";
import { readEmails, receiveTelegramMessages, sendEmail, sendTelegramMessage, sendWebhook } from "./actions.js";
import { buildExecutionOrder } from "./helpers.js";
import { workflowExecutionStore } from "./MemoryStore.js";
export const executeWorkflow = async (req, res) => {
    const workflowId = req.params.workflowId;
    console.log('Executing workflow with ID:', workflowId);
    if (!workflowId) {
        return res.status(500).json({ message: 'Provide Valid Workflow ID' });
    }
    const workflow = await prisma.workflow.findUnique({ where: { id: workflowId },
        include: { nodes: true, nodeLinks: true } });
    if (!workflow) {
        throw new Error('No valid workflow found with these credentials');
    }
    const executionHistory = await prisma.executionHistory.create({
        data: {
            workflowId,
            status: "running",
            startedAt: new Date(),
            log: {}
        }
    });
    const orderedNodes = buildExecutionOrder(workflow.nodes, workflow.nodeLinks);
    console.log('orderedNodes', orderedNodes);
    workflowExecutionStore[workflowId] = {};
    let previousOutput = null;
    for (const node of orderedNodes) {
        try {
            let output = null;
            workflowExecutionStore[workflowId][node.id] = {
                status: "running",
                input: previousOutput,
                output: null,
            };
            let credential = null;
            if (node.credentialId) {
                credential = await prisma.credential.findUnique({
                    where: { id: node.credentialId },
                });
                if (!credential) {
                    throw new Error(`Missing credential for node ${node.id}`);
                }
            }
            console.log('Executing node:', node.type, 'with parameters:', node.parameters, 'and credential:', credential);
            if (node.type === "gmail") {
                output = await sendEmail(node.parameters, credential.data, previousOutput);
            }
            else if (node.type === "telegram") {
                output = await sendTelegramMessage(node.parameters, credential.data, previousOutput);
            }
            else if (node.type === "webhook") {
                output = await sendWebhook(node.parameters, credential, previousOutput);
            }
            else if (node.type === "readEmail") {
                output = await readEmails(credential.data, node.parameters);
            }
            else if (node.type === 'receiveTelegramMessages') {
                output = await receiveTelegramMessages(credential.data, node.parameters);
            }
            workflowExecutionStore[workflowId][node.id] = {
                status: "success", input: previousOutput, output
            };
            //@ts-ignore
            await prisma.nodeExecutionHistory.create({
                data: {
                    workflowExecutionId: executionHistory.id,
                    nodeId: node.id,
                    status: "success",
                    input: previousOutput,
                    output
                }
            });
            previousOutput = output;
        }
        catch (err) {
            workflowExecutionStore[workflowId][node.id] = { status: 'failed', input: previousOutput, output: err.message };
            //@ts-ignore
            await prisma.nodeExecutionHistory.create({
                data: {
                    workflowExecutionId: executionHistory.id,
                    nodeId: node.id,
                    input: previousOutput,
                    output: { error: err.message },
                    status: 'failed',
                }
            });
            break;
        }
    }
    await prisma.executionHistory.update({
        where: { id: executionHistory.id },
        data: {
            status: 'completed',
            finishedAt: new Date(),
            log: workflowExecutionStore[workflowId]
        }
    });
    return res.status(200).json({ message: 'Workflow executed successfully', data: workflowExecutionStore[workflowId] });
};
export const executeNode = async (nodeId, inputData) => {
    const node = await prisma.workflowNode.findUnique({
        where: { id: nodeId },
    });
    if (!node)
        throw new Error("Node not found");
    const credential = await prisma.credential.findUnique({
        //@ts-ignore
        where: { id: node.credentialId || "" },
    });
    if (!credential)
        throw new Error(`Missing credential for node ${nodeId}`);
    if (node.type === "gmail") {
        return await sendEmail(node.parameters, credential.data, inputData);
    }
    else if (node.type === "telegram") {
        return await sendTelegramMessage(node.parameters, credential.data, inputData);
    }
    throw new Error(`Unsupported node type: ${node.type}`);
};
//# sourceMappingURL=ExecutionEngine.js.map