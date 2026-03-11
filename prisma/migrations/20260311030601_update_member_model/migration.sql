/*
  Warnings:

  - You are about to drop the column `ExpirationDate` on the `members` table. All the data in the column will be lost.
  - Added the required column `expirationDate` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "ExpirationDate",
ADD COLUMN     "expirationDate" DATE NOT NULL;
