BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Address] (
    [id] INT NOT NULL IDENTITY(1,1),
    [id_kraju] INT NOT NULL,
    [wojewodztwo] NVARCHAR(1000) NOT NULL,
    [kod_pocztowy] NVARCHAR(1000) NOT NULL,
    [ulica] NVARCHAR(1000) NOT NULL,
    [number_domu] INT NOT NULL,
    [number_lokalu] INT NOT NULL,
    [powiat] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Address_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[County] (
    [id] INT NOT NULL IDENTITY(1,1),
    [kraj] NVARCHAR(1000) NOT NULL,
    [kod_kraju] NVARCHAR(3) NOT NULL,
    CONSTRAINT [County_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [County_kod_kraju_key] UNIQUE NONCLUSTERED ([kod_kraju])
);

-- AddForeignKey
ALTER TABLE [dbo].[Address] ADD CONSTRAINT [Address_id_kraju_fkey] FOREIGN KEY ([id_kraju]) REFERENCES [dbo].[County]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
