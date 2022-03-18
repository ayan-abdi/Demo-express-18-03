const mssql = require('mssql');
const connectionString = process.env.DB_CONNECTIONSTRING;

// Création de notre connection à la base de donnée
const createDbConnection = async () => {
    const db = await mssql.connect(process.env.DB_CONNECTIONSTRING);
    return db; 
};





module.exports = {
    createDbConnection
};