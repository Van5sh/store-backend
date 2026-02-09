/*
  Warnings:

  - You are about to drop the column `priorty` on the `Complaint` table. All the data in the column will be lost.
  - Added the required column `priority` to the `Complaint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_userId_fkey";

-- AlterTable
ALTER TABLE "Complaint" DROP COLUMN "priorty",
ADD COLUMN     "priority" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ComplaintDetails" (
    "id" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "ComplaintDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplaintDetails" ADD CONSTRAINT "ComplaintDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplaintDetails" ADD CONSTRAINT "ComplaintDetails_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplaintDetails" ADD CONSTRAINT "ComplaintDetails_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaint"("complaintId") ON DELETE CASCADE ON UPDATE CASCADE;
