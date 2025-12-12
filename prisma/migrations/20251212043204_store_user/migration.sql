/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `city` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `city_id` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `warehouse_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `store_name` on the `Store` table. All the data in the column will be lost.
  - The primary key for the `WareHouse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `warehouse_capacity` on the `WareHouse` table. All the data in the column will be lost.
  - You are about to drop the column `warehouse_id` on the `WareHouse` table. All the data in the column will be lost.
  - You are about to drop the column `warehouse_name` on the `WareHouse` table. All the data in the column will be lost.
  - You are about to drop the `StoreandProduct` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cityName]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - The required column `cityId` was added to the `City` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `cityName` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - The required column `productId` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warehouseId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeName` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warehouseCapacity` to the `WareHouse` table without a default value. This is not possible if the table is not empty.
  - The required column `warehouseId` was added to the `WareHouse` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `warehouseName` to the `WareHouse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_warehouse_id_fkey";

-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_product_id_fkey";

-- DropForeignKey
ALTER TABLE "StoreandProduct" DROP CONSTRAINT "StoreandProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "StoreandProduct" DROP CONSTRAINT "StoreandProduct_storeId_fkey";

-- DropForeignKey
ALTER TABLE "WareHouse" DROP CONSTRAINT "WareHouse_cityId_fkey";

-- DropForeignKey
ALTER TABLE "WarehouseDetails" DROP CONSTRAINT "WarehouseDetails_cityId_fkey";

-- DropForeignKey
ALTER TABLE "WarehouseDetails" DROP CONSTRAINT "WarehouseDetails_warehouseId_fkey";

-- DropIndex
DROP INDEX "City_city_key";

-- AlterTable
ALTER TABLE "City" DROP CONSTRAINT "City_pkey",
DROP COLUMN "city",
DROP COLUMN "city_id",
ADD COLUMN     "cityId" TEXT NOT NULL,
ADD COLUMN     "cityName" TEXT NOT NULL,
ADD CONSTRAINT "City_pkey" PRIMARY KEY ("cityId");

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "product_id",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "product_id",
DROP COLUMN "product_name",
DROP COLUMN "product_price",
DROP COLUMN "warehouse_id",
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "productName" TEXT NOT NULL,
ADD COLUMN     "productPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "warehouseId" TEXT NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("productId");

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "product_id",
DROP COLUMN "product_name",
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "productName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "store_name",
ADD COLUMN     "storeName" TEXT NOT NULL,
ADD COLUMN     "vendorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WareHouse" DROP CONSTRAINT "WareHouse_pkey",
DROP COLUMN "warehouse_capacity",
DROP COLUMN "warehouse_id",
DROP COLUMN "warehouse_name",
ADD COLUMN     "warehouseCapacity" INTEGER NOT NULL,
ADD COLUMN     "warehouseId" TEXT NOT NULL,
ADD COLUMN     "warehouseName" TEXT NOT NULL,
ADD CONSTRAINT "WareHouse_pkey" PRIMARY KEY ("warehouseId");

-- DropTable
DROP TABLE "StoreandProduct";

-- CreateTable
CREATE TABLE "StoreAndProduct" (
    "storeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT,

    CONSTRAINT "StoreAndProduct_pkey" PRIMARY KEY ("storeId","productId")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_cityName_key" ON "City"("cityName");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse"("warehouseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WareHouse" ADD CONSTRAINT "WareHouse_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("cityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse"("warehouseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("cityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreAndProduct" ADD CONSTRAINT "StoreAndProduct_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreAndProduct" ADD CONSTRAINT "StoreAndProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;
