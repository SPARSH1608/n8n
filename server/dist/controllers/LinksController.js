import { prisma } from "../db/prisma.js";
export const createLink = async (req, res) => {
    try {
        const { workflowId, fromNodeId, toNodeId } = req.body;
        if (!workflowId || !fromNodeId || !toNodeId) {
            return res.status(500).json({ message: 'Provide Valid Inputs' });
        }
        const link = await prisma.workflowNodeLink.create({
            data: {
                workflowId,
                fromNodeId,
                toNodeId
            }
        });
        res.status(201).json({ message: 'Link created successfully', link });
    }
    catch (error) {
        console.log('error while creating link', error);
        res.status(500).json({ message: 'Something went wrong while creating link please try again later' });
    }
};
export const getLinks = async (req, res) => {
    try {
        const workflowId = req.query.workflowId;
        console.log('workflowId', workflowId);
        if (!workflowId) {
            return res.status(500).json({ message: 'Provide Valid Workflow ID' });
        }
        const links = await prisma.workflowNodeLink.findMany({ where: { workflowId }, include: { fromNode: true, toNode: true } });
        return res.status(200).json({ message: 'Successfully fetched links', data: links });
    }
    catch (error) {
        console.log('error while getting links', error);
        res.status(500).json({ message: 'Something went wrong while getting links please try again later' });
    }
};
export const updateLink = async (req, res) => {
    try {
        const nodeId = req.params.id;
        console.log('nodeId', nodeId);
        if (!nodeId) {
            return res.status(500).json({ message: 'Provide Valid Link ID' });
        }
        const { workflowId, fromNodeId, toNodeId } = req.body;
        if (!workflowId || !fromNodeId || !toNodeId) {
            return res.status(500).json({ message: 'Provide Valid Inputs' });
        }
        const node = await prisma.workflowNodeLink.findUnique({ where: { id: nodeId } });
        if (!node) {
            return res.status(500).json({ message: 'No valid link found with these credentials' });
        }
        const link = await prisma.workflowNodeLink.update({
            where: { id: nodeId },
            data: {
                workflowId,
                fromNodeId,
                toNodeId
            }
        });
        res.status(200).json({ message: 'Link updated successfully', link });
    }
    catch (error) {
        console.log('error while updating link', error);
        res.status(500).json({ message: 'Something went wrong while updating link please try again later' });
    }
};
export const deleteLink = async (req, res) => {
    try {
        const nodeId = req.params.id;
        if (!nodeId) {
            return res.status(500).json({ message: 'Provide Valid Link ID' });
        }
        const link = await prisma.workflowNodeLink.delete({
            where: { id: nodeId }
        });
        res.status(200).json({ message: 'Link deleted successfully', link });
    }
    catch (error) {
        console.log('error while deleting link', error);
        res.status(500).json({ message: 'Something went wrong while deleting link please try again later' });
    }
};
//# sourceMappingURL=LinksController.js.map