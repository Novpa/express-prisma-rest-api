import express, { Express, NextFunction, Request, Response } from "express";
import authRouter from "./routers/auth.router";
import bookRouter from "./routers/books.router";
import memberRouter from "./routers/members.router";
import cors from "cors";
import { globalErrorHandler } from "./middleware/errorMiddleware";

const app: Express = express();
const PORT = 8000;

app.use(express.json());

app.use(cors());

app.use("/api/staff", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/member", memberRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`🦄 Server is running in port ${PORT}`);
});
