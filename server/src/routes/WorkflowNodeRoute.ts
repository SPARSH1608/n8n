import express from 'express';
import { createNode, deleteNode, getNodes, updateNode } from '../controllers/WorkflowNodes.js';
const router=express.Router();

router.post('/',createNode)
router.get('/',getNodes)
router.put('/:id',updateNode)
router.delete('/:id',deleteNode)
export default router;