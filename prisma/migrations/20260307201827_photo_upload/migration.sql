/*
  Warnings:

  - Added the required column `productPhoto` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productPhoto" TEXT NOT NULL;
