/*
  Warnings:

  - You are about to drop the column `categoryIDKey` on the `tbl_products` table. All the data in the column will be lost.
  - You are about to alter the column `productPrice` on the `tbl_products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `tbl_products` DROP COLUMN `categoryIDKey`,
    MODIFY `productPrice` INTEGER NOT NULL;
