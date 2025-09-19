import prisma from '../db/prisma.js'
import type { RequestHandler } from 'express'
interface Node{
    workflowId: string,
    type: string,
    parameters: object,
    positionX: number,
    positionY: number,
    credentialId?: string,
    trigger?: string // Made optional to match possible absence in DB result
}
export const createNode:RequestHandler=async(req,res)=>{
try {
    const {workflowId,type,parameters,positionX,positionY,trigger,credentialId}=req.body
    console.log('body',req.body)
  
    if(!workflowId || !type || positionX === undefined || positionY === undefined){
        return res.status(500).json({message:'Provide Valid Inputs'})
    }
    const workflow=await prisma.workflow.findUnique({where:{id:workflowId}})
    if(!workflow){
        return res.status(500).json({message:'No valid workflow found with these credentials'})
    }
    //@ts-ignore
    const nodeData: Node = {
        workflowId,
        type,
        parameters,
        positionX,
        positionY,
        credentialId,
        trigger
    }
    const node = await prisma.workflowNode.create({
        data: nodeData
          
    })
    res.status(200).json({message:'Node created successfully',node})
} catch (error) {
    console.log('error while creating node',error)
    res.status(500).json({message:'Something went wrong while creating node please try again later'})
}
}

export const getNodes:RequestHandler=async(req,res)=>{
    try {
        const workflowId=req.query.workflowId as string
        console.log('workflowId',workflowId)
        if(!workflowId){
            return res.status(500).json({message:'Provide Valid Workflow ID'})
        }
        const workflow=await prisma.workflow.findUnique({where:{id:workflowId}})
        if(!workflow){
            res.status(500).json({message:'No workflow found'})
        }
        const nodes=await prisma.workflowNode.findMany({where:{workflowId}})
        return res.status(200).json({message:'Successfully fetched Nodes',data:nodes})
    } catch (error) {
        console.log('error getting nodes for workflow',error)
    res.status(500).json({message:'Something went wrong while getting nodes please try again later'})
      
    }
}

export const updateNode:RequestHandler=async(req,res)=>{
    try {
        
        const nodeId=req.params.id as string
        const {type,parameters,positionX,positionY,trigger,credentialId}=req.body
        if(!nodeId || !type || positionX === undefined || positionY === undefined){
            return res.status(500).json({message:'Provide Valid Inputs'})
        }
        const node=await prisma.workflowNode.findUnique({where:{id:nodeId}})
        if(!node){
            return res.status(500).json({message:'No valid node found with these credentials'})
        }
        const updatedNodeData:Node={
            workflowId:node.workflowId,
            type,
            parameters,
            positionX,
            positionY,
            credentialId,
            trigger
        }
        const updatedNode=await prisma.workflowNode.update({
            where:{id:nodeId},
            data: updatedNodeData
              
        })
        res.status(200).json({message:'Node updated successfully',node:updatedNode})
    } catch (error) {
        console.log('error while updating node',error)
        res.status(500).json({message:'Something went wrong while updating node please try again later'})
    }
}


export const deleteNode:RequestHandler=async(req,res)=>{
 try {
       const nodeId=req.params.id as string
       console.log('nodeId',nodeId)
       if(!nodeId){
         res.status(500).json({message:'No node found'})
       }
     const node=  await prisma.workflowNode.findUnique({where:{id:nodeId}})
     
     if(!node){
         return res.status(500).json({message:'No valid node found with these credentials'})
        }
        const workflow=await prisma.workflow.findUnique({where:{id:node?.workflowId.toString()}})
        if(!workflow){
            return res.status(500).json({message:'No valid workflow found with these credentials'})
        }
        
       await prisma.workflowNode.delete({where:{id:nodeId}})
       
       return res.status(200).json({message:'Successfully deleted node'})
 } catch (error) {
    console.log("something went wrong while deleting nodes ")
    return res.status(500).json({message:'Something went wrong while deleting node'})
 }
    
}