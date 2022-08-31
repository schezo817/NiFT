/*
  Warnings:

  - You are about to drop the column `used` on the `reserved_NFT_detail` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `reserved_NFT_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reserved_NFT_detail" DROP COLUMN "used",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "reserved_NFT_flag" (
    "uuid" UUID NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "reserved_NFT_flag_uuid_key" ON "reserved_NFT_flag"("uuid");

-- AddForeignKey
ALTER TABLE "reserved_NFT_flag" ADD CONSTRAINT "reserved_NFT_flag_uuid_fkey" FOREIGN KEY ("uuid") REFERENCES "reserved_NFT"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
