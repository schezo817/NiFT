/*
  Warnings:

  - You are about to drop the `user_flag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_flag" DROP CONSTRAINT "user_flag_user_id_fkey";

-- DropTable
DROP TABLE "user_flag";

-- CreateTable
CREATE TABLE "user_status" (
    "user_id" UUID NOT NULL,
    "is_company" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_status_user_id_key" ON "user_status"("user_id");

-- AddForeignKey
ALTER TABLE "user_status" ADD CONSTRAINT "user_status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
