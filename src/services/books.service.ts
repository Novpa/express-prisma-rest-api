import { Book } from "../../generated/prisma/client";
import prisma from "../config/prisma-client.config";
// import { Book } from "../types/bookTypes";

export const booksService = {
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
};
