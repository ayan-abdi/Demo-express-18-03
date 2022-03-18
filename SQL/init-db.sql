USE [master]; 
GO

CREATE DATABASE DemoSession; 
GO

USE [DemoSession];
GO

CREATE TABLE [Member] (
    [MemberId] BIGINT IDENTITY,  --Pour eviter les conflits des nom on les mets en []
    [Email] NVARCHAR(250),
    [Password] CHAR(60),
    CONSTRAINT PK_Member PRIMARY KEY ([MemberId]),
    CONSTRAINT UK_Member__Email UNIQUE([Email]),
)