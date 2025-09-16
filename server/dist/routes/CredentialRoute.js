import { Router } from "express";
import { createCreds, getCreds, updateCreds, deleteCreds } from "../controllers/CredentialsController.js";
const router = Router();
router.post('/', createCreds);
router.get('/', getCreds);
router.put('/:id', updateCreds);
router.delete('/:id', deleteCreds);
export default router;
//# sourceMappingURL=CredentialRoute.js.map