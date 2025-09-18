/*
  Warnings:

  - You are about to drop the column `productId` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `WarehouseDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `WarehouseDetails` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Order" DROP CONSTRAINT "Order_productId_fkey";

-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "productId",
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."WarehouseDetails" DROP CONSTRAINT "WarehouseDetails_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "WarehouseDetails_pkey" PRIMARY KEY ("cityId", "warehouseId");

-- CreateTable
CREATE TABLE "public"."StoreandProduct" (
    "storeId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "StoreandProduct_pkey" PRIMARY KEY ("storeId","productId")
);

-- AddForeignKey
ALTER TABLE "public"."StoreandProduct" ADD CONSTRAINT "StoreandProduct_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StoreandProduct" ADD CONSTRAINT "StoreandProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
