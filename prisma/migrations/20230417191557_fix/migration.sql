BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Podmiot] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nip] NVARCHAR(1000) NOT NULL,
    [nazwa] NVARCHAR(1000) NOT NULL,
    [id_adresu] INT NOT NULL,
    CONSTRAINT [Podmiot_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Klient] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nip] NVARCHAR(1000) NOT NULL,
    [nazwa] NVARCHAR(1000) NOT NULL,
    [id_adresu] INT NOT NULL,
    CONSTRAINT [Klient_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Podmiot] ADD CONSTRAINT [Podmiot_id_adresu_fkey] FOREIGN KEY ([id_adresu]) REFERENCES [dbo].[Address]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Klient] ADD CONSTRAINT [Klient_id_adresu_fkey] FOREIGN KEY ([id_adresu]) REFERENCES [dbo].[Address]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
