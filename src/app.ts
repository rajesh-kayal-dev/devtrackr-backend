import express from "express";
import taskRoutes from "./routes/task.routes"

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use((err: any, req: any, res: any, next: any)=>{
    res.status(500).json({
        message: "Something went wrong"
    })
})

app.get("/", (req, res)=>{
    res.send("server is running")
})

export default app;