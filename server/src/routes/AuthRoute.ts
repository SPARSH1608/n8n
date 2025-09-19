import express from 'express';
import { signIn, signUp, verify, me } from '../controllers/AuthController.js';
const router=express.Router();


router.post('/signin',signIn)
router.post('/signup',signUp)
router.get('/me', me)
router.get('/verify',verify)
export default router;