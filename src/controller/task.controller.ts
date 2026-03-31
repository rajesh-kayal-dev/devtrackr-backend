import { Request, Response } from "express";

interface Task {
    id:number,
    title:string,
    status: "pending" | "completed";
}

let tasks: Task[] = [];

export const createTask = (req: Request, res: Response) =>{
    const { title } = req.body;

  const newTask: Task = {
    id: Date.now(),
    title,
    status: "pending"
  };

  tasks.push(newTask);

  res.json({
    message: "Task created",
    task: newTask
  });
}

export const getTask = (req: Request , res: Response) =>{
 res.json({ tasks });
}

export const updateTask = (req: Request , res: Response) =>{
const id = Number(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.status = "completed";

  res.json({
    message: "Task updated",
    task
  });
}
export const deleteTask = (req: Request , res: Response) =>{
  const id = Number(req.params.id);

  const initialLength = tasks.length;

  tasks = tasks.filter(t => t.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({
    message: "Task deleted"
  });
}