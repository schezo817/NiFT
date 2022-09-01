/*
  Warnings:

  - You are about to drop the column `brand` on the `reserved_NFT` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `reserved_NFT` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `reserved_NFT` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `reserved_NFT` table. All the data in the column will be lost.
  - You are about to drop the column `used` on the `reserved_NFT` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reserved_NFT" DROP COLUMN "brand",
DROP COLUMN "code",
DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "used";

-- CreateTable
CREATE TABLE "reserved_NFT_detail" (
    "uuid" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "code" SMALLINT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "reserved_NFT_detail_uuid_key" ON "reserved_NFT_detail"("uuid");

-- AddForeignKey
ALTER TABLE "reserved_NFT_detail" ADD CONSTRAINT "reserved_NFT_detail_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "reserved_NFT"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
