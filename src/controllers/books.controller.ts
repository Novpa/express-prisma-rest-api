import { Request, Response } from "express";
import { booksService } from "../services/books.service";

export const booksController = {
  async addBook(req: Request, res: Response) {
    const { isbn, title, author, releasedDate, publisher, category } = req.body;

    await booksService({
      isbn,
      title,
      author,
      releasedDate,
      publisher,
      category,
    });
  },
};
