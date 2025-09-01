/*
  Warnings:

  - You are about to drop the column `product_code` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_code` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `warehouse_location` on the `WareHouse` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Product_product_code_key";

-- DropIndex
DROP INDEX "public"."Sales_product_code_key";

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "product_code";

-- AlterTable
ALTER TABLE "public"."Sales" DROP COLUMN "product_code",
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."WareHouse" DROP COLUMN "warehouse_location";

-- CreateTable
CREATE TABLE "public"."WarehouseDetails" (
    "id" TEXT NOT NULL,
    "warehouse_id" TEXT NOT NULL,
    "citty_id" TEXT NOT NULL,

    CONSTRAINT "WarehouseDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "orderId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- AddForeignKey
ALTER TABLE "public"."WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "public"."WareHouse"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_citty_id_fkey" FOREIGN KEY ("citty_id") REFERENCES "public"."City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sales" ADD CONSTRAINT "Sales_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
