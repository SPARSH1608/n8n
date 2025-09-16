import express from "express";
const router=express.Router();

import { createTriggerConfig, deleteTriggerConfig, getTriggerConfig, updateTriggerConfig } from "../controllers/TriggerConfigController.js";

router.post('/',createTriggerConfig)
router.get('/',getTriggerConfig)
router.put('/:id',updateTriggerConfig)
router.delete('/:id',deleteTriggerConfig)


export default router;