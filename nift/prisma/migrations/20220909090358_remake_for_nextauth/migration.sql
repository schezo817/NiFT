-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDetail" (
    "id" TEXT NOT NULL,
    "user_name" TEXT,
    "wallet_address" TEXT,
    "is_company" BOOLEAN,

    CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "reserved_nfts" (
    "id" TEXT NOT NULL,
    "series_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reserved_nfts_pkey" PRIMARY KEY ("id")
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
    "nft_name" VARCHAR(255) NOT NULL,
    "brand_name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "royalty_first" DECIMAL(6,3) NOT NULL,
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
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

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

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDetail" ADD CONSTRAINT "UserDetail_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserved_nfts" ADD CONSTRAINT "reserved_nfts_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
