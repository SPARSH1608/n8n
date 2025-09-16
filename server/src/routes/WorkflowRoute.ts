import express from 'express';
import { createWorkflow, deleteWorkflow, getWorkflows, updateWorkflow,  } from '../controllers/Workflow.js';
const router=express.Router();

router.post('/',createWorkflow)
router.get('/',getWorkflows)
router.put('/:id',updateWorkflow)
router.delete('/:id',deleteWorkflow)


export default router