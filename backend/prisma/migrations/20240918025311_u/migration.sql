/*
  Warnings:

  - You are about to drop the `UserResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_documentId_fkey";

-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_userId_fkey";

-- DropTable
DROP TABLE "UserResponse";

-- CreateTable
CREATE TABLE "Responses" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "submittedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answers" JSONB NOT NULL,

    CONSTRAINT "Responses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Responses" ADD CONSTRAINT "Responses_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
