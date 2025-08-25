-- CreateEnum
CREATE TYPE "public"."UserType" AS ENUM ('vendor', 'customer', 'admin');

-- CreateTable
CREATE TABLE "public"."User" (
    "userid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "public"."UserType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "warehouse_id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "public"."City" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WareHouse" (
    "warehouse_id" TEXT NOT NULL,
    "warehouse_name" TEXT NOT NULL,
    "warehouse_location" TEXT NOT NULL,
    "warehouse_capacity" INTEGER NOT NULL,
    "cityId" TEXT NOT NULL,

    CONSTRAINT "WareHouse_pkey" PRIMARY KEY ("warehouse_id")
);

-- CreateTable
CREATE TABLE "public"."Sales" (
    "id" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Store" (
    "storeId" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("storeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_code_key" ON "public"."Product"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "City_city_key" ON "public"."City"("city");

-- CreateIndex
CREATE UNIQUE INDEX "Sales_product_code_key" ON "public"."Sales"("product_code");

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "public"."WareHouse"("warehouse_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "public"."Store"("storeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WareHouse" ADD CONSTRAINT "WareHouse_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
