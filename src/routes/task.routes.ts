import express from "express";
import {
    createTask,
    getTask,
    updateTask,
    deleteTask
} from "../controllers/task.controller";
import { authMiddleware, requireAdmin } from "../middleware/auth.middleware";
const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTask);
router.patch("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, requireAdmin, deleteTask);

export default router;