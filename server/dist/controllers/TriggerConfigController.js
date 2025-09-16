import {} from "express";
import { prisma } from "../db/prisma.js";
export const createTriggerConfig = async (req, res) => {
    try {
        const { workflowId, type, config, nodeId } = req.body;
        if (!type || !config || (!workflowId && !nodeId)) {
            return res.status(400).json({ message: 'Provide Valid Inputs' });
        }
        if (workflowId) {
            const workflow = await prisma.workflow.findUnique({ where: { id: workflowId } });
            if (!workflow) {
                return res.status(500).json({ message: 'No valid workflow found with these credentials' });
            }
        }
        if (nodeId) {
            const node = await prisma.workflowNode.findUnique({ where: { id: nodeId } });
            if (!node) {
                return res.status(500).json({ message: 'No valid node found with these credentials' });
            }
        }
        const data = {
            workflowId,
            type,
            config,
            nodeId
        };
        let created;
        if (workflowId) {
            created = await prisma.triggerConfiguration.create({
                data: { ...data }
            });
        }
        else {
            created = await prisma.triggerConfiguration.create({
                data: { ...data }
            });
        }
        return res.status(201).json({ message: 'Trigger configuration created successfully', data: created });
    }
    catch (error) {
        console.log('error while creating trigger config', error);
        res.status(500).json({ message: 'Something went wrong while creating trigger config please try again later' });
    }
};
export const getTriggerConfig = async (req, res) => {
    try {
    }
    catch (error) {
        console.log('error while getting trigger config', error);
        res.status(500).json({ message: 'Something went wrong while getting trigger config please try again later' });
    }
};
export const updateTriggerConfig = async (req, res) => {
    try {
    }
    catch (error) {
        console.log('error while updating trigger config', error);
        res.status(500).json({ message: 'Something went wrong while updating trigger config please try again later' });
    }
};
export const deleteTriggerConfig = async (req, res) => {
    try {
    }
    catch (error) {
        console.log('error while deleting trigger config', error);
        res.status(500).json({ message: 'Something went wrong while deleting trigger config please try again later' });
    }
};
//# sourceMappingURL=TriggerConfigController.js.map