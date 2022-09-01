-- CreateTable
CREATE TABLE "user_auth" (
    "user_id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "user_detail" (
    "user_id" UUID NOT NULL,
    "user_name" VARCHAR(50) NOT NULL,
    "image_url" VARCHAR(1024) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "user_flag" (
    "user_id" UUID NOT NULL,
    "is_company" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "reserved_NFT" (
    "uuid" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "code" SMALLINT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_user_id_key" ON "user_auth"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_email_key" ON "user_auth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_detail_user_id_key" ON "user_detail"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_flag_user_id_key" ON "user_flag"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "reserved_NFT_uuid_key" ON "reserved_NFT"("uuid");

-- AddForeignKey
ALTER TABLE "user_auth" ADD CONSTRAINT "user_auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_detail" ADD CONSTRAINT "user_detail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_flag" ADD CONSTRAINT "user_flag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserved_NFT" ADD CONSTRAINT "reserved_NFT_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
