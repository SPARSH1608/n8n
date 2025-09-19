import jwt, { type JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
import {Resend} from 'resend'
import type { RequestHandler } from 'express'
import bcrypt from 'bcrypt'
dotenv.config()
import prisma from '../db/prisma.js'
const SECRET='secret'
// const resend=new Resend('re_eHdjiaLb_8U1tuY4Afepx8xbQnRm77Q8P')
const SALT_ROUND=10
import generator from 'generate-password'
function sendMail(email: string, link: string) {
    console.log('------------', email, link);
    return resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'EN_ATE_N ! Your Automation Journey Starts Here!!',
        html: `
            <h2>Welcome to En_ATE_n Platform</h2>
            <p>Click the link below to access your account:</p>
            <a href="${link}" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 4px;">
                Access Account
            </a>
            <p>This link expires in 1 hour.</p>
            <p>If you didn't request this, please ignore this email.</p>
        `
    });
}
export const signUp:RequestHandler=(req,res)=>{
    const {email}=req.body;
  jwt.sign({email},SECRET!,{expiresIn:'1h'},async(err,token)=>{
    if(err){
        console.log('Error signing the jwt token',err)
        return res.status(500).json({message:'Email is required'})
    }
    const link=`http://localhost:3000/api/v1/auth/verify?token=${token}`
    try {
         await sendMail(email,link)
         return res.status(200).json({message:"Successfully send Magic Link to provided Email",email})
    } catch (error) {
        console.log("error sending the magic link")
        return res.status(500).json({message:'Can not send magic link ! Please try again later'})
    }
  })
     
}
export const verify:RequestHandler=(req,res)=>{
    try {
        
    
    const token=req.query.token  as string
    console.log('token',token)
    if(!token){
        console.log("No token found during verification")
        return res.status(500).json({message:'no token found during verification'})
    }
    jwt.verify(token,SECRET!,async(err, decoded :any )=>{
        console.log('type of decoded',typeof(decoded),decoded)
        if(err){
            console.log('Can not verify token',err)
            return res.status(500).json({message:"Can not verify user"})
        }
        try {
            let password=generator.generate({
                length:10,
                numbers:true,
                symbols:true,
                uppercase:true,
                lowercase:true
            })
            if(!decoded?.email){
                return res.status(500).json({message:"Can not verify user"})
            }
            await prisma.user.create({
                data:{
                    email:decoded?.email ,
                    password:(await bcrypt.hash(password,SALT_ROUND)),
                }
            })
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: decoded?.email,
                subject: 'Your Temporary Password for En_ATE_N',
                html: `
                    <h2>Your Temporary Password for En_ATE_N</h2>
                    <p>Your temporary password is: <strong>${password}</strong></p>
                    <p>Please log in and change your password as soon as possible.</p>
                `
            })
            res.cookie('authToken',token,{maxAge:360000})
            return res.redirect('http://localhost:5173/dashboard')
            
        } catch (error) {
            console.log('Can not verify token',error)
            return res.status(500).json({message:"Can not verify user"})
        }
    })
    } catch (error) {
        console.log('error during verification',error)
        return res.status(500).json({message:'error during verification'})
    }
}
export const signIn:RequestHandler=async(req,res)=>{
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(500).json({message: "Invalid Credentials"});
        }
        const user = await prisma.user.findUnique({where: {email}});
        if (!user) {
            return res.status(500).json({message: 'No valid user found with these credentials'});
        }
        console.log('user', user.password);
        console.log('password', password);
        // const isValid = await bcrypt.compare(password, user.password);
        const isValid = (password === user.password);
        if (!isValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        jwt.sign({data: email}, SECRET!, {expiresIn: '1h'}, async (err, token) => {
            if (err) {
                console.log('JWT sign error', err);
                return res.status(500).json({message: 'Error signing token'});
            }
              res.cookie('authToken', token, {
  maxAge: 360000,
  httpOnly: true,
  sameSite: 'lax', 
  secure: false 
});
console.log('userId', user.id);
return res.status(200).json({message: "Successfully signed in",
    data: {email, token, userId: user.id}});
});
    } catch (error) {
        console.log("error while signing in",error);
        return res.status(500).json({message: "error while signin in"});
    }
}

export const me: RequestHandler = async (req, res) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).json({message: "No token found"});
        }
        
        jwt.verify(token, SECRET!, async (err:any, decoded: any) => {
            if (err) {
                console.log('JWT verify error', err);
                return res.status(401).json({message: "Invalid token"});
            }
            
            try {
                const user = await prisma.user.findUnique({
                    where: { email: decoded.data },
                    select: { id: true, email: true, createdAt: true, updatedAt: true }
                });
                
                if (!user) {
                    return res.status(404).json({message: "User not found"});
                }
                
                return res.status(200).json({user});
            } catch (error) {
                console.log("Error fetching user", error);
                return res.status(500).json({message: "Error fetching user"});
            }
        });
    } catch (error) {
        console.log("Error in /me endpoint", error);
        return res.status(500).json({message: "Internal server error"});
    }
}