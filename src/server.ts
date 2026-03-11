import express, { Express, NextFunction, Request, Response } from "express";
import authRouter from "./routers/auth.router";
import bookRouter from "./routers/books.router";
import memberRouter from "./routers/members.router";

const app: Express = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/staff", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/member", memberRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "There's something wrong!",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🦄 Server is running in port ${PORT}`);
});
