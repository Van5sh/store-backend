/*
  Warnings:

  - A unique constraint covering the columns `[vendorId,cityName,storeName]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Store_vendorId_cityName_key";

-- CreateIndex
CREATE UNIQUE INDEX "Store_vendorId_cityName_storeName_key" ON "Store"("vendorId", "cityName", "storeName");
