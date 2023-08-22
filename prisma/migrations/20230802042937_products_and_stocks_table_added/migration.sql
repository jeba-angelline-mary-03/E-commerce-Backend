-- CreateTable
CREATE TABLE `tbl_products` (
    `productId` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,
    `productDisplayName` VARCHAR(191) NOT NULL,
    `productSKU` VARCHAR(191) NOT NULL,
    `productDescription` VARCHAR(191) NOT NULL,
    `categoryIDKey` INTEGER NOT NULL,
    `categoryID` INTEGER NOT NULL,
    `productPrice` VARCHAR(191) NOT NULL,
    `stockID` INTEGER NULL,
    `updatedOn` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tbl_products_stockID_key`(`stockID`),
    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_stocks` (
    `stockId` INTEGER NOT NULL AUTO_INCREMENT,
    `stockQuantity` INTEGER NOT NULL,
    `updatedOn` DATETIME(3) NOT NULL,

    PRIMARY KEY (`stockId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_products` ADD CONSTRAINT `tbl_products_stockID_fkey` FOREIGN KEY (`stockID`) REFERENCES `tbl_stocks`(`stockId`) ON DELETE CASCADE ON UPDATE CASCADE;
