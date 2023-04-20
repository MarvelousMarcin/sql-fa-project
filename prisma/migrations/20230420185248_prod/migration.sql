BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Produkt] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nazwa] NVARCHAR(1000) NOT NULL,
    [netto] FLOAT(53) NOT NULL,
    [brutto] FLOAT(53) NOT NULL,
    [faktura_id] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Produkt_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Produkt_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Faktura] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_klienta] INT NOT NULL,
    [nip] NVARCHAR(1000) NOT NULL,
    [id_adresu] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Faktura_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Faktura_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Produkt] ADD CONSTRAINT [Produkt_faktura_id_fkey] FOREIGN KEY ([faktura_id]) REFERENCES [dbo].[Faktura]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
