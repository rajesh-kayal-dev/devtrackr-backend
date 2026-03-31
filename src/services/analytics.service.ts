import { getTaskService } from "./task.service";


export const getTaskStats = () => {
  const tasks = getTaskService();

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = tasks.filter(t => t.status === "pending").length;

  return {
    total,
    completed,
    pending
  };
};

export const getDailyStats = () => {
  const tasks = getTaskService();

  const today = new Date().toDateString();

  const createdToday = tasks.filter(
    t => t.createdAt.toDateString() === today
  ).length;

  const completedToday = tasks.filter(
    t => t.completedAt && t.completedAt.toDateString() === today
  ).length;

  return {
    createdToday,
    completedToday
  };
};

export const getWeeklyStats = () => {
  const tasks = getTaskService();

  const now = new Date();
  const last7Days = new Date();
  last7Days.setDate(now.getDate() - 7);

  const created = tasks.filter(
    t => t.createdAt >= last7Days
  ).length;

  const completed = tasks.filter(
    t => t.completedAt && t.completedAt >= last7Days
  ).length;

  return {
    createdLast7Days: created,
    completedLast7Days: completed
  };
};