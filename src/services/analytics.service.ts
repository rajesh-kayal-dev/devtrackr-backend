import { getTaskService } from "./task.service";

export const getTaskStats = () =>{
    const tasks = getTaskService();

    const total = getTaskService.length;
    const completed = tasks.filter(t => t.status === "completed").length;
    const pending = tasks.filter(t => t.status === "pending").length;

    return {
        total,
        completed,
        pending
    };

}