import express from 'express';
import { signIn, signUp, verify } from '../controllers/AuthController.js';
const router = express.Router();
router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/verify', verify);
export default router;
//# sourceMappingURL=AuthRoute.js.map