import express from 'express';
import { executeWorkflow } from '../engine/ExecutionEngine.js';
const router = express.Router();
router.post('/executeWorkflow/:workflowId', executeWorkflow);
export default router;
//# sourceMappingURL=ExecutionRoute.js.map