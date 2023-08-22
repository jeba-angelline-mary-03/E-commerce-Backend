/*
  Warnings:

  - You are about to drop the column `first_name` on the `tbl_user_profile` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `tbl_user_profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userAuth]` on the table `tbl_user_profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `tbl_user_profile` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    ADD COLUMN `userAuth` INTEGER NULL,
    ADD COLUMN `userFirstName` VARCHAR(191) NULL,
    ADD COLUMN `userLastName` VARCHAR(191) NULL,
    MODIFY `userProfileId` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `street` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL,
    MODIFY `country` VARCHAR(191) NULL,
    MODIFY `zipcode` VARCHAR(191) NULL,
    MODIFY `userProfilePictureUrl` VARCHAR(191) NULL,
    MODIFY `dateOfBirth` VARCHAR(191) NULL,
    MODIFY `phoneNumber` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_user_profile_userAuth_key` ON `tbl_user_profile`(`userAuth`);

-- AddForeignKey
ALTER TABLE `tbl_user_profile` ADD CONSTRAINT `tbl_user_profile_userAuth_fkey` FOREIGN KEY (`userAuth`) REFERENCES `tbl_users_auth`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
