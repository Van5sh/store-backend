-- CreateTable
CREATE TABLE "Announcements" (
    "announcementId" TEXT NOT NULL,
    "announcementTitle" TEXT NOT NULL,
    "announcementContent" TEXT NOT NULL,
    "announcementDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Announcements_pkey" PRIMARY KEY ("announcementId")
);

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
