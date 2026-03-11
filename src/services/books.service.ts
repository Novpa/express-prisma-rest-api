import { Book } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";
// import { Book } from "../types/bookTypes";

export const booksService = {
  //? CREATE BOOK
  async createBook({
    isbn,
    title,
    author,
    releasedDate,
    publisher,
    category,
  }: Omit<Book, "id" | "createdAt" | "updatedAt" | "deletedAt">) {
    await prisma.book.create({
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

  //? GET ALL BOOK
  async getAllBooks({ page, limit }: { page: number; limit: number }) {
    const offset = (page - 1) * limit;
    const books = await prisma.book.findMany({
      take: limit,
      skip: offset,
      where: {
        deletedAt: null,
      },
    });

    return { books, totalData: books.length, currentPage: page };
  },

  //? GET BOOK BY ID
  async getBookById(bookId: string) {
    const book = await prisma.book.findFirst({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      throw new Error("Invalid params book id");
    }

    return book;
  },
};
