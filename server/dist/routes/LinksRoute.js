import express from "express";
import { createLink, deleteLink, getLinks, updateLink } from "../controllers/LinksController.js";
const router = express.Router();
router.post('/', createLink);
router.get('/', getLinks);
router.put('/:id', updateLink);
router.delete('/:id', deleteLink);
export default router;
//# sourceMappingURL=LinksRoute.js.map