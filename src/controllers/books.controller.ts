import { Request, Response } from "express";
import { booksService } from "../services/books.service";

export const booksController = {
  async addBook(req: Request, res: Response) {
    const { isbn, title, author, releasedDate, publisher, category } = req.body;

    await booksService.createBook({
      isbn,
      title,
      author,
      releasedDate: new Date(releasedDate),
      publisher,
      category,
    });

    console.log(new Date(releasedDate));

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: {
        isbn,
        title,
        author,
        releasedDate,
        publisher,
        category,
      },
    });
  },
};
