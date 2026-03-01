/*
  Warnings:

  - Added the required column `deliveryDate` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Complaint" ADD COLUMN     "deliveryDate" TIMESTAMP(3) NOT NULL;
