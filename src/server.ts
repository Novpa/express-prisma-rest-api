import express, { Express, NextFunction, Request, Response } from "express";
import authRouter from "./routers/auth.router";

const app: Express = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/staff", authRouter);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Registered staff failed",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🦄 Server is running in port ${PORT}`);
});
