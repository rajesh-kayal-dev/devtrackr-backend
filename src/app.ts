import express from "express";
import dotenv from "dotenv";
dotenv.config();
import taskRoutes from "./routes/task.routes";
import userRoutes from "./auth/auth.routes";
import analyticsRoutes  from "./routes/analytics.routes"

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/auth", userRoutes);
app.use("/analytics", analyticsRoutes);

app.use((err: any, req: any, res: any, next: any)=>{
    res.status(500).json({
        message: "Something went wrong"
    })
})

app.get("/", (req, res)=>{
    res.send("server is running")
})

export default app;