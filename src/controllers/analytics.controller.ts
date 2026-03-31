import { Request, Response } from "express";
import { getTaskStats } from "../services/analytics.service";

export const getAnalytics = (req: Request, res: Response) => {
  const stats = getTaskStats();

  res.json({
    message: "Analytics fetched",
    stats
  });
};