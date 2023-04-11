/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User] ADD [login] NVARCHAR(1000) NOT NULL,
[password] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_login_key] UNIQUE NONCLUSTERED ([login]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
