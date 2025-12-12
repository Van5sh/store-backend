-- CreateTable
CREATE TABLE "Complaint" (
    "complaintId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("complaintId")
);

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
