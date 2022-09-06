/*
  Warnings:

  - You are about to drop the column `uuid` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `reserved_NFT_detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reserved_NFT_flag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reserved_NFTs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reserved_NFT_detail" DROP CONSTRAINT "reserved_NFT_detail_uuid_fkey";

-- DropForeignKey
ALTER TABLE "reserved_NFT_flag" DROP CONSTRAINT "reserved_NFT_flag_uuid_fkey";

-- DropForeignKey
ALTER TABLE "reserved_NFTs" DROP CONSTRAINT "reserved_NFTs_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_auth" DROP CONSTRAINT "user_auth_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_detail" DROP CONSTRAINT "user_detail_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_flag" DROP CONSTRAINT "user_flag_user_id_fkey";

-- DropIndex
DROP INDEX "users_uuid_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "uuid",
ADD COLUMN     "user_id" UUID NOT NULL;

-- DropTable
DROP TABLE "reserved_NFT_detail";

-- DropTable
DROP TABLE "reserved_NFT_flag";

-- DropTable
DROP TABLE "reserved_NFTs";

-- CreateTable
CREATE TABLE "reserved_nfts" (
    "user_id" UUID NOT NULL,
    "series_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "series_image" (
    "series_id" UUID NOT NULL,
    "common_image_url" VARCHAR(255) NOT NULL,
    "rare_image_url" VARCHAR(255) NOT NULL,
    "veryrare_image_url" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "series_lot" (
    "series_id" UUID NOT NULL,
    "total_lots" INTEGER NOT NULL,
    "total_used_lots" INTEGER NOT NULL,
    "veryrare_lots" INTEGER NOT NULL,
    "veryrare_used_lots" INTEGER NOT NULL,
    "rare_lots" INTEGER NOT NULL,
    "rare_used_lots" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "series_detail" (
    "series_id" UUID NOT NULL,
    "brand_name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "royalty_first" INTEGER NOT NULL,
    "royalty_second" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "series_nfts" (
    "series_id" UUID NOT NULL,
    "nft_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "nft_status" (
    "nft_id" UUID NOT NULL,
    "nft_code" SMALLINT NOT NULL,
    "is_used" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "reserved_nfts_user_id_key" ON "reserved_nfts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "reserved_nfts_series_id_key" ON "reserved_nfts"("series_id");

-- CreateIndex
CREATE UNIQUE INDEX "series_image_series_id_key" ON "series_image"("series_id");

-- CreateIndex
CREATE UNIQUE INDEX "series_lot_series_id_key" ON "series_lot"("series_id");

-- CreateIndex
CREATE UNIQUE INDEX "series_detail_series_id_key" ON "series_detail"("series_id");

-- CreateIndex
CREATE UNIQUE INDEX "series_nfts_series_id_key" ON "series_nfts"("series_id");

-- CreateIndex
CREATE UNIQUE INDEX "series_nfts_nft_id_key" ON "series_nfts"("nft_id");

-- CreateIndex
CREATE UNIQUE INDEX "nft_status_nft_id_key" ON "nft_status"("nft_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- AddForeignKey
ALTER TABLE "user_auth" ADD CONSTRAINT "user_auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_detail" ADD CONSTRAINT "user_detail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_flag" ADD CONSTRAINT "user_flag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserved_nfts" ADD CONSTRAINT "reserved_nfts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series_image" ADD CONSTRAINT "series_image_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "reserved_nfts"("series_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series_lot" ADD CONSTRAINT "series_lot_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "reserved_nfts"("series_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series_detail" ADD CONSTRAINT "series_detail_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "reserved_nfts"("series_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series_nfts" ADD CONSTRAINT "series_nfts_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "reserved_nfts"("series_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nft_status" ADD CONSTRAINT "nft_status_nft_id_fkey" FOREIGN KEY ("nft_id") REFERENCES "series_nfts"("nft_id") ON DELETE RESTRICT ON UPDATE CASCADE;
