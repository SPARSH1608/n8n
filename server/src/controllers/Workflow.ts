import prisma from "../db/prisma.js";
import type { RequestHandler } from "express";

export const createWorkflow: RequestHandler = async (req, res) => {
    try {
        const {userId, name}=req.body
        if(!userId || !name){
            return res.status(500).json({message:'Provide Valid Inputs'})
        }
        const user=await prisma.user.findUnique({where:{id:userId}})
        if(!user){
            return res.status(500).json({message:'No valid user found with these credentials'})
        }
        const workflow=await prisma.workflow.create({
            data:{
                userId,
                name
            }
        })
        res.status(200).json({message:'Workflow created successfully',workflow})
    } catch (error) {
        console.log('error while creating workflow',error)
        res.status(500).json({message:'Something went wrong while creating workflow please try again later'})
    }
}

export const getWorkflows: RequestHandler = async (req, res) => {
    try {
        const userId=req.query.userId as string
        if(!userId){
            return res.status(500).json({message:'Provide Valid User ID'})
        }
        const user=await prisma.user.findUnique({where:{id:userId}})
        if(!user){
            return res.status(500).json({message:'No valid user found with these credentials'})
        }
        const workflows=await prisma.workflow.findMany({where:{userId}})
        res.status(200).json({message:'Workflows fetched successfully',workflows})
    } catch (error) {
        console.log('error while fetching workflows',error)
        res.status(500).json({message:'Something went wrong while fetching workflows please try again later'})
    }
    
}


export const updateWorkflow: RequestHandler = async (req, res) => {
    try {
        const workflowId=req.params.id as string
        const {name,isActive}=req.body
        if(!workflowId || name === undefined || isActive === undefined){
            return res.status(500).json({message:'Provide Valid Inputs'})
        }
      
        const workflow=await prisma.workflow.findUnique({where:{id:workflowId}})
        if(!workflow){
            return res.status(500).json({message:'No valid workflow found with these credentials'})
        }
        const updatedWorkflow=await prisma.workflow.update({
            where:{id:workflowId},
            data:{name,isActive}
        })
        res.status(200).json({message:'Workflow updated successfully',updatedWorkflow})
    } catch (error) {
        console.log('error while updating workflow',error)
        res.status(500).json({message:'Something went wrong while updating workflow please try again later'})
    }
}

export const deleteWorkflow: RequestHandler = async (req, res) => {
    try {
        const workflowId=req.params.id as string
        if(!workflowId){
            return res.status(500).json({message:'Provide Valid Inputs'})
        }
    
        const workflow=await prisma.workflow.findUnique({where:{id:workflowId}})
        if(!workflow){
            return res.status(500).json({message:'No valid workflow found with these credentials'})
        }
        await prisma.workflow.delete({where:{id:workflowId}})
        res.status(200).json({message:'Workflow deleted successfully'})
    } catch (error) {
        console.log('error while deleting workflow',error)
        res.status(500).json({message:'Something went wrong while deleting workflow please try again later'})
    }
}