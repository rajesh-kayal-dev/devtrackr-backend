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


app.get("/", (req, res)=>{
    res.send("server is running")
})

export default app;