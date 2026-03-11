import { Router } from "express";
import { booksController } from "../controllers/books.controller";

const router = Router();

router.post("/", booksController.addBook);
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);

export default router;
