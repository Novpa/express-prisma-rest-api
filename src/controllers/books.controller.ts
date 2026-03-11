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

  async getAllBooks(req: Request, res: Response) {
    const page = req.query.page === undefined ? 1 : Number(req.query.page);
    const limit = req.query.limit === undefined ? 10 : Number(req.query.limit);

    if (isNaN(page) || isNaN(limit)) {
      throw new Error("Invalid query, page & limit should be integers");
    }

    const { books, totalData, currentPage } = await booksService.getAllBooks({
      page,
      limit,
    });

    res.status(200).json({
      success: true,
      message: "Fetch books data successfull",
      data: {
        totalData,
        currentPage,
        books,
      },
    });
  },
};
