/*
  Warnings:

  - Added the required column `playbackId` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playbackUrl` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "playbackId" TEXT NOT NULL,
ADD COLUMN     "playbackUrl" TEXT NOT NULL;
