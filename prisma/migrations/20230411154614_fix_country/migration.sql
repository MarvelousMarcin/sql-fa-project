/*
  Warnings:

  - You are about to drop the `County` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Address] DROP CONSTRAINT [Address_id_kraju_fkey];

-- DropTable
DROP TABLE [dbo].[County];

-- CreateTable
CREATE TABLE [dbo].[Country] (
    [id] INT NOT NULL IDENTITY(1,1),
    [kraj] NVARCHAR(1000) NOT NULL,
    [kod_kraju] NVARCHAR(3) NOT NULL,
    CONSTRAINT [Country_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Country_kod_kraju_key] UNIQUE NONCLUSTERED ([kod_kraju])
);

-- AddForeignKey
ALTER TABLE [dbo].[Address] ADD CONSTRAINT [Address_id_kraju_fkey] FOREIGN KEY ([id_kraju]) REFERENCES [dbo].[Country]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
