interface Task {
    id:number;
    title:string;
    status: "pending" | "completed";
    createdAt: Date;
  completedAt?: Date;
}

let tasks: Task[] = [];

export const createTaskService = (title:string): Task =>{

  const newTask: Task = {
    id: Date.now(),
    title,
    status: "pending",
    createdAt: new Date()
  };

  tasks.push(newTask);

  return newTask;
}

export const getTaskService = (): Task[] =>{
 return tasks
}

export const updateTaskService = (id: number): Task | null =>{

  const task = tasks.find(t => t.id === id);

  if (!task) return null;

  task.status = "completed";

  return task;
}
export const deleteTaskService = (id: number): boolean =>{
  const initialLength = tasks.length;

  tasks = tasks.filter(t => t.id !== id);

  return tasks.length !== initialLength;
   

}