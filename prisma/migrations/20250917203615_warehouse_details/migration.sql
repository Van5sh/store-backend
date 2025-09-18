/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `citty_id` on the `WarehouseDetails` table. All the data in the column will be lost.
  - You are about to drop the column `warehouse_id` on the `WarehouseDetails` table. All the data in the column will be lost.
  - The required column `city_id` was added to the `City` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `cityId` to the `WarehouseDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warehouseId` to the `WarehouseDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."WareHouse" DROP CONSTRAINT "WareHouse_cityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WarehouseDetails" DROP CONSTRAINT "WarehouseDetails_citty_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."WarehouseDetails" DROP CONSTRAINT "WarehouseDetails_warehouse_id_fkey";

-- AlterTable
ALTER TABLE "public"."City" DROP CONSTRAINT "City_pkey",
DROP COLUMN "id",
ADD COLUMN     "city_id" TEXT NOT NULL,
ADD CONSTRAINT "City_pkey" PRIMARY KEY ("city_id");

-- AlterTable
ALTER TABLE "public"."WarehouseDetails" DROP COLUMN "citty_id",
DROP COLUMN "warehouse_id",
ADD COLUMN     "cityId" TEXT NOT NULL,
ADD COLUMN     "warehouseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."WareHouse" ADD CONSTRAINT "WareHouse_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."City"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "public"."WareHouse"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WarehouseDetails" ADD CONSTRAINT "WarehouseDetails_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."City"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;
