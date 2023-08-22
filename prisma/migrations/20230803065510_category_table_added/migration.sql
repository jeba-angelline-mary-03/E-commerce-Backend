/*
  Warnings:

  - A unique constraint covering the columns `[categoryID]` on the table `tbl_products` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `tbl_products` MODIFY `categoryID` INTEGER NULL;

-- CreateTable
CREATE TABLE `tbl_category` (
    `categoryId` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_products_categoryID_key` ON `tbl_products`(`categoryID`);

-- AddForeignKey
ALTER TABLE `tbl_products` ADD CONSTRAINT `tbl_products_categoryID_fkey` FOREIGN KEY (`categoryID`) REFERENCES `tbl_category`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;
