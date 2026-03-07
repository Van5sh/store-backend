/*
  Warnings:

  - You are about to drop the column `userId` on the `Announcements` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Announcements" DROP CONSTRAINT "Announcements_userId_fkey";

-- AlterTable
ALTER TABLE "Announcements" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "AnnouncementDetails" (
    "id" TEXT NOT NULL,
    "announcementId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AnnouncementDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AnnouncementDetails" ADD CONSTRAINT "AnnouncementDetails_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcements"("announcementId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnouncementDetails" ADD CONSTRAINT "AnnouncementDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE CASCADE ON UPDATE CASCADE;
