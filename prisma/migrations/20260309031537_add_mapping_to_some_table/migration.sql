/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `members` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `staff` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "books" RENAME CONSTRAINT "Book_pkey" TO "books_pkey";

-- AlterTable
ALTER TABLE "staff" RENAME CONSTRAINT "Staff_pkey" TO "staff_pkey";

-- AlterTable
ALTER TABLE "transaction_item" RENAME CONSTRAINT "TransactionItem_pkey" TO "transaction_item_pkey";

-- AlterTable
ALTER TABLE "transactions" RENAME CONSTRAINT "Transaction_pkey" TO "transactions_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "members_email_key" ON "members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "staff_email_key" ON "staff"("email");

-- RenameForeignKey
ALTER TABLE "transaction_item" RENAME CONSTRAINT "TransactionItem_bookId_fkey" TO "transaction_item_bookId_fkey";

-- RenameForeignKey
ALTER TABLE "transaction_item" RENAME CONSTRAINT "TransactionItem_transactionId_fkey" TO "transaction_item_transactionId_fkey";

-- RenameForeignKey
ALTER TABLE "transactions" RENAME CONSTRAINT "Transaction_memberId_fkey" TO "transactions_memberId_fkey";

-- RenameForeignKey
ALTER TABLE "transactions" RENAME CONSTRAINT "Transaction_staffId_fkey" TO "transactions_staffId_fkey";
