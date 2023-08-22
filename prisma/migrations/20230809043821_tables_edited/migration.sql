/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `tbl_order_item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_id` to the `tbl_order_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_order_item` ADD COLUMN `product_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_order_item_product_id_key` ON `tbl_order_item`(`product_id`);

-- AddForeignKey
ALTER TABLE `tbl_order_item` ADD CONSTRAINT `tbl_order_item_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `tbl_products`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;
