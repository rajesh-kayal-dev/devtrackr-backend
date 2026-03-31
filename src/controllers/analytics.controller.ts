import { Request, Response } from "express";
import {  getTaskStats ,getDailyStats, getWeeklyStats } from "../services/analytics.service";

export const getAnalytics = (req: Request, res: Response) => {
   const stats = getTaskStats();
  const daily = getDailyStats();
  const weekly = getWeeklyStats();

  res.json({
    stats,
    daily,
    weekly
  });
};