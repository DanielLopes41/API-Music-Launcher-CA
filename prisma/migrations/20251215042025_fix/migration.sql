/*
  Warnings:

  - The primary key for the `music` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_music` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "user_music" DROP CONSTRAINT "user_music_musicId_fkey";

-- DropForeignKey
ALTER TABLE "user_music" DROP CONSTRAINT "user_music_userId_fkey";

-- AlterTable
ALTER TABLE "music" DROP CONSTRAINT "music_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "music_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "music_id_seq";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";

-- AlterTable
ALTER TABLE "user_music" DROP CONSTRAINT "user_music_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "musicId" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_music_pkey" PRIMARY KEY ("userId", "musicId");

-- AddForeignKey
ALTER TABLE "user_music" ADD CONSTRAINT "user_music_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_music" ADD CONSTRAINT "user_music_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
