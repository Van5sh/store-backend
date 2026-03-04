-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_orderId_fkey";

-- AlterTable
ALTER TABLE "Complaint" ALTER COLUMN "orderId" DROP NOT NULL,
ALTER COLUMN "deliveryDate" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE SET NULL ON UPDATE CASCADE;
