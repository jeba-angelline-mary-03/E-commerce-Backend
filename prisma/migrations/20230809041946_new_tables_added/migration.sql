/*
  Warnings:

  - Added the required column `Description` to the `tbl_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `tbl_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedOn` to the `tbl_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FloatingStockQuantity` to the `tbl_stocks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualStockQuantity` to the `tbl_stocks` table without a default value. This is not possible if the table is not empty.
  - Made the column `street` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `zipcode` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userProfilePictureUrl` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateOfBirth` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userFirstName` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userLastName` on table `tbl_user_profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tbl_category` ADD COLUMN `Description` VARCHAR(191) NOT NULL,
    ADD COLUMN `categoryName` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedOn` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_stocks` ADD COLUMN `FloatingStockQuantity` INTEGER NOT NULL,
    ADD COLUMN `actualStockQuantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tbl_user_profile` MODIFY `street` VARCHAR(191) NOT NULL,
    MODIFY `city` VARCHAR(191) NOT NULL,
    MODIFY `state` VARCHAR(191) NOT NULL,
    MODIFY `country` VARCHAR(191) NOT NULL,
    MODIFY `zipcode` VARCHAR(191) NOT NULL,
    MODIFY `userProfilePictureUrl` VARCHAR(191) NOT NULL,
    MODIFY `dateOfBirth` DATETIME(3) NOT NULL,
    MODIFY `phoneNumber` VARCHAR(191) NOT NULL,
    MODIFY `userFirstName` VARCHAR(191) NOT NULL,
    MODIFY `userLastName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `tbl_images` (
    `ImageId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductID` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `imageOrder` INTEGER NOT NULL,
    `updatedOn` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tbl_images_ProductID_key`(`ProductID`),
    PRIMARY KEY (`ImageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_order` (
    `orderId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `total_amount` INTEGER NOT NULL,
    `order_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `shipping_address` VARCHAR(191) NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `createdOn` DATETIME(3) NOT NULL,

    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_order_item` (
    `order_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderID` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_order_item_OrderID_key`(`OrderID`),
    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `Orderid` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `payment_Orderid_key`(`Orderid`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_images` ADD CONSTRAINT `tbl_images_ProductID_fkey` FOREIGN KEY (`ProductID`) REFERENCES `tbl_products`(`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_order_item` ADD CONSTRAINT `tbl_order_item_OrderID_fkey` FOREIGN KEY (`OrderID`) REFERENCES `tbl_order`(`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_Orderid_fkey` FOREIGN KEY (`Orderid`) REFERENCES `tbl_order`(`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;
