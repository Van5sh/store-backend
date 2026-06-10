/*
  Warnings:

  - Added the required column `userId` to the `RecentActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RecentActivity" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "RecentActivity_userId_idx" ON "RecentActivity"("userId");

-- AddForeignKey
ALTER TABLE "RecentActivity" ADD CONSTRAINT "RecentActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE CASCADE ON UPDATE CASCADE;
