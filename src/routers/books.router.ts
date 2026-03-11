import { Router } from "express";
import { booksController } from "../controllers/books.controller";

const router = Router();

router.post("/", booksController.addBook);
router.get("/", booksController.getAllBooks);

export default router;
