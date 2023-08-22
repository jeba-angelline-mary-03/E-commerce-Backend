/*
  Warnings:

  - You are about to alter the column `otpExpiresAt` on the `tbl_users_auth` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `tbl_users_auth` MODIFY `otpExpiresAt` DATETIME(3) NOT NULL;
