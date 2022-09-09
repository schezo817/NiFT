/*
  Warnings:

  - You are about to drop the `UserDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserDetail" DROP CONSTRAINT "UserDetail_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_company" BOOLEAN DEFAULT false,
ADD COLUMN     "user_name" TEXT DEFAULT '名称未設定',
ADD COLUMN     "wallet_address" TEXT DEFAULT '';

-- DropTable
DROP TABLE "UserDetail";
