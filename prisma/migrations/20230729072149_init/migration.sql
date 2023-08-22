-- CreateTable
CREATE TABLE `tbl_users_auth` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userEmail` VARCHAR(191) NOT NULL,
    `userPassword` VARCHAR(191) NOT NULL,
    `userRole` VARCHAR(191) NOT NULL,
    `userStatus` VARCHAR(191) NOT NULL,
    `isUserLoggedIn` BOOLEAN NOT NULL DEFAULT false,
    `updatedOn` DATETIME(3) NOT NULL,
    `lastLoggedIn` DATETIME(3) NOT NULL,
    `otp` VARCHAR(191) NOT NULL,
    `otpExpiresAt` VARCHAR(191) NOT NULL,
    `resetPasswordKey` BOOLEAN NOT NULL DEFAULT false,
    `resetPasswordKeyExpiresAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_user_profile` (
    `userProfileId` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `zipcode` VARCHAR(191) NOT NULL,
    `userProfilePictureUrl` VARCHAR(191) NOT NULL,
    `dateOfBirth` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_user_profile_userProfileId_key`(`userProfileId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
