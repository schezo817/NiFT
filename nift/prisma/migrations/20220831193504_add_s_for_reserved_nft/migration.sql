/*
  Warnings:

  - You are about to drop the `reserved_NFT` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reserved_NFT" DROP CONSTRAINT "reserved_NFT_user_id_fkey";

-- DropForeignKey
ALTER TABLE "reserved_NFT_detail" DROP CONSTRAINT "reserved_NFT_detail_uuid_fkey";

-- DropForeignKey
ALTER TABLE "reserved_NFT_flag" DROP CONSTRAINT "reserved_NFT_flag_uuid_fkey";

-- DropTable
DROP TABLE "reserved_NFT";

-- CreateTable
CREATE TABLE "reserved_NFTs" (
    "uuid" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "reserved_NFTs_uuid_key" ON "reserved_NFTs"("uuid");

-- AddForeignKey
ALTER TABLE "reserved_NFTs" ADD CONSTRAINT "reserved_NFTs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserved_NFT_detail" ADD CONSTRAINT "reserved_NFT_detail_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "reserved_NFTs"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserved_NFT_flag" ADD CONSTRAINT "reserved_NFT_flag_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "reserved_NFTs"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
