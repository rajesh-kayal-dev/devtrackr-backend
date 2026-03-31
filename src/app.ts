import express from "express";
import taskRoutes from "./routes/task.routes"

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res)=>{
    res.send("server is running")
})

export default app;