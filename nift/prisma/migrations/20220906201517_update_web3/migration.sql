/*
  Warnings:

  - You are about to drop the column `royalty_second` on the `series_detail` table. All the data in the column will be lost.
  - You are about to alter the column `royalty_first` on the `series_detail` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(6,3)`.
  - Added the required column `nft_name` to the `series_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "series_detail" DROP COLUMN "royalty_second",
ADD COLUMN     "nft_name" VARCHAR(255) NOT NULL,
ALTER COLUMN "royalty_first" SET DATA TYPE DECIMAL(6,3);

-- AlterTable
ALTER TABLE "user_auth" ADD COLUMN     "wallet_address" VARCHAR(255);
