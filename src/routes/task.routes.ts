import express from "express";

import {
    createTask,
    getTask,
    updateTask,
    deleteTask
} from "../controller/task.controller";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;