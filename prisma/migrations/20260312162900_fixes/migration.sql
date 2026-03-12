/*
  Warnings:

  - You are about to drop the column `remainingSpace` on the `WarehouseInventory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WareHouse" ADD COLUMN     "remainingSpace" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "warehouseCapacity" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "WarehouseInventory" DROP COLUMN "remainingSpace";
