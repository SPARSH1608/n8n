import type { RequestHandler } from "express"
import prisma from '../db/prisma.js'

export const createCreds:RequestHandler=async(req,res)=>{
    try {
        
        const {userId,type,data,name}=req.body
        if(!data || !type || !userId || !name){
            return res.status(500).json({message:'Provide Valid Inputs'})
        }
        const user=await prisma.user.findUnique({where:{id:userId}})
        if(!user){
            return res.status(500).json({message:'No valid user found with these credentials'})
        }
        await prisma.credential.create({
            data:{
                userId: String(userId),
                name,
                type,
                data
            }
        })
        res.status(200).json({message:'credentials created successfully'})
    } catch (error) {
        res.status(500).json({message:'Something went wrong while creating credentials please try again later'})
    }
}

export const getCreds:RequestHandler=async (req,res)=>{
    try {
        const userId = req.query.userId as string
        if(!userId ){
            return res.status(500).json({message:'Provide Valid Inputs'})
        }
        const user=await prisma.user.findUnique({where:{id:userId}})
        if(!user){
            return res.status(500).json({message:'No valid user found with these credentials'})
        }
        const creds=await prisma.credential.findMany({where:{userId:userId}})
        res.status(200).json({credentials:creds})
    } catch (error) {
        console.log('error while fetching credentials')
        res.status(500).json({message:'Something went wrong while fetching credentials please try again later'})
    }
}

export const updateCreds:RequestHandler=async (req,res)=>{
    try {
        
  
    const credentialId=req.params.id as string
    if(!credentialId){
        return res.status(500).json({message:'Provide Valid Inputs'})
    }
  
    const credential=await prisma.credential.findUnique({where:{id:credentialId}})
    if(!credential){
        return res.status(500).json({message:'No valid credential found with these credentials'})
    }
    const updatedCredential=await prisma.credential.update({
        where:{id:credentialId},
        data:{
            ...req.body
        }
    })
    res.status(200).json({message:'credentials updated successfully',credential:updatedCredential})
      } catch (error) {
        return res.status(500).json({message:'Something went wrong while updating credentials please try again later'})
    }
    
} 

export const deleteCreds:RequestHandler=async(req,res)=>{
   try {
    console.log('req.params:', req.params)
     const credentialId=req.params.id as string
     console.log('delete credentialId:', credentialId)
       if(!credentialId ){
        return res.status(500).json({message:'Provide Valid Inputs'})
    }
   
    const credential=await prisma.credential.findUnique({where:{id:credentialId}})
    if(!credential){
        return res.status(500).json({message:'No valid credential found with these credentials'})
    }
    await prisma.credential.delete({where:{id:credentialId}})
    res.status(200).json({message:'credentials deleted successfully'})
   } catch (error) {
       console.log('error while deleting credentials')
       res.status(500).json({message:'Something went wrong while deleting credentials please try again later'})
   }
}