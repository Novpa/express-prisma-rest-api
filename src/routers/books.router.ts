import { Router } from "express";
import { booksController } from "../controllers/books.controller";

const router = Router();

router.post("/", booksController.addBook);
