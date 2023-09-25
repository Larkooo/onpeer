/*
  Warnings:

  - You are about to drop the column `playbackUrl` on the `Video` table. All the data in the column will be lost.
  - Added the required column `storage` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "playbackUrl",
ADD COLUMN     "storage" TEXT NOT NULL;
