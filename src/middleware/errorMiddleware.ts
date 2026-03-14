import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";

  if (err instanceof AppError) {
    return res.status(statusCode).json({
      status: "failed",
      statusCode,
      message,
    });
  }

  return res.status(500).json({
    status: "failed",
    statusCode: 500,
    message: "There's a problem with our server",
  });
};
