/*
  Warnings:

  - You are about to drop the column `comment_count` on the `Thread` table. All the data in the column will be lost.
  - You are about to drop the column `like_count` on the `Thread` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Thread" DROP COLUMN "comment_count",
DROP COLUMN "like_count";
