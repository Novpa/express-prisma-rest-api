export interface Book {
  id?: string;
  isbn: string;
  title: string;
  author: string;
  releasedDate: Date;
  publisher: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
