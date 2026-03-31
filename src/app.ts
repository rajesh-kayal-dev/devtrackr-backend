import express from "express";

const app = express();

app.use(express.json());

interface Task {
    id:number,
    title:string,
    status: "pending" | "completed";
}
let tasks: Task[] = [];


app.post("/tasks", (req, res) => {
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
});

app.get("/tasks", (req, res) => {
  res.json({
    tasks: tasks
  });
});

app.patch("/tasks/:id", (req, res) => {
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
});

app.get("/", (req, res)=>{
    res.send("server is running")
})

export default app;