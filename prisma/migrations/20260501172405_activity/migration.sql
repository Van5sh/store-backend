-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('product_created', 'product_updated', 'product_deleted', 'order_created', 'order_status_changed', 'inventory_adjusted', 'store_created', 'warehouse_created', 'complaint_created');

-- CreateTable
CREATE TABLE "RecentActivity" (
    "id" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "type" "ActivityType" NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecentActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecentActivity_vendorId_createdAt_idx" ON "RecentActivity"("vendorId", "createdAt");

-- AddForeignKey
ALTER TABLE "RecentActivity" ADD CONSTRAINT "RecentActivity_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "User"("userid") ON DELETE CASCADE ON UPDATE CASCADE;
