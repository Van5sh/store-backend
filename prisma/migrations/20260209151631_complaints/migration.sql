/*
  Warnings:

  - Added the required column `priorty` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Complaint" ADD COLUMN     "priorty" INTEGER NOT NULL;
