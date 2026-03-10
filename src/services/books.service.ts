import prisma from "../config/prisma-client.config";

export const booksService = {
  async createBook({ isbn, title, author, releasedDate, publisher, category }) {
    await prisma.book.create();
  },
};
