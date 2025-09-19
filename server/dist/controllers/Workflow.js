import prisma from "../db/prisma.js";
export const createWorkflow = async (req, res) => {
    try {
        const { userId, name, isActive, trigger } = req.body;
        if (!userId || !name) {
            return res.status(500).json({ message: 'Provide Valid Inputs' });
        }
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status(500).json({ message: 'No valid user found with these credentials' });
        }
        const data = {
            userId,
            name,
            isActive,
            trigger
        };
        const workflow = await prisma.workflow.create({
            data: data
        });
        res.status(200).json({ message: 'Workflow created successfully', workflow });
    }
    catch (error) {
        console.log('error while creating workflow', error);
        res.status(500).json({ message: 'Something went wrong while creating workflow please try again later' });
    }
};
export const getWorkflows = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(500).json({ message: 'Provide Valid User ID' });
        }
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status(500).json({ message: 'No valid user found with these credentials' });
        }
        const workflows = await prisma.workflow.findMany({ where: { userId } });
        res.status(200).json({ message: 'Workflows fetched successfully', workflows });
    }
    catch (error) {
        console.log('error while fetching workflows', error);
        res.status(500).json({ message: 'Something went wrong while fetching workflows please try again later' });
    }
};
export const updateWorkflow = async (req, res) => {
    try {
        const workflowId = req.params.id;
        const { name, isActive, trigger } = req.body;
        if (!workflowId || name === undefined || isActive === undefined) {
            return res.status(500).json({ message: 'Provide Valid Inputs' });
        }
        const workflow = await prisma.workflow.findUnique({ where: { id: workflowId } });
        if (!workflow) {
            return res.status(500).json({ message: 'No valid workflow found with these credentials' });
        }
        const updatedData = {
            name,
            isActive,
            trigger
        };
        const updatedWorkflow = await prisma.workflow.update({
            where: { id: workflowId },
            data: updatedData
        });
        res.status(200).json({ message: 'Workflow updated successfully', updatedWorkflow });
    }
    catch (error) {
        console.log('error while updating workflow', error);
        res.status(500).json({ message: 'Something went wrong while updating workflow please try again later' });
    }
};
export const deleteWorkflow = async (req, res) => {
    try {
        const workflowId = req.params.id;
        if (!workflowId) {
            return res.status(500).json({ message: 'Provide Valid Inputs' });
        }
        const workflow = await prisma.workflow.findUnique({ where: { id: workflowId } });
        if (!workflow) {
            return res.status(500).json({ message: 'No valid workflow found with these credentials' });
        }
        await prisma.workflow.delete({ where: { id: workflowId } });
        res.status(200).json({ message: 'Workflow deleted successfully' });
    }
    catch (error) {
        console.log('error while deleting workflow', error);
        res.status(500).json({ message: 'Something went wrong while deleting workflow please try again later' });
    }
};
//# sourceMappingURL=Workflow.js.map