import { Request, Response } from "express";

import {
  createTaskService,
  getTaskService,
  updateTaskService,
  deleteTaskService
} from "../services/task.service";


export const createTask = (req: Request, res: Response) =>{
    const { title } = req.body;

  const task = createTaskService(title);

  res.json({
    message: "Task created",
    task
  });
}

export const getTask = (req: Request , res: Response) =>{
  const tasks = getTaskService();
 res.json({ tasks });
}

export const updateTask = (req: Request , res: Response) =>{
const id = Number(req.params.id);

  const task = updateTaskService(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({
    message: "Task updated",
    task
  });
}
export const deleteTask = (req: Request , res: Response) =>{
  const id = Number(req.params.id);

  const isDeleted = deleteTaskService(id);

  if (!isDeleted) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({
    message: "Task deleted"
  });
}