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
    CONSTRAINT PK_Member PRIMARY KEY ([MemberId]), --PK veut dire primary key 
    CONSTRAINT UK_Member__Email UNIQUE([Email]),  --UK veut dire unique key 
);
GO

ALTER  TABLE Member
    ADD Pseudo VARCHAR(50) NOT NULL
        CONSTRAINT UK_Member__Pseudo UNIQUE;