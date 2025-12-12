/*
  Warnings:

  - Added the required column `orderId` to the `Complaint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `WarehouseDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Complaint" ADD COLUMN     "orderId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "vendorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "cityId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WarehouseDetails" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("cityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
