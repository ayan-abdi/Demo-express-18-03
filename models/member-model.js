const mssql = require('mssql'); 
const { createDbConnection } = require('../utils/db-utils');
const { memberMapper } = require('./mappers/member-mapper');

const memberModel = {

    insert: ({email, passwordHash}) => {
        let db; 
        try{
            db = await createDbConnection();
            const querySQL = 'INSERT INTO Member (Email, Password)'
                + 'OUTPUT inserted.MembrId'
                + 'VALUE (@email, @pwd)';
            // Cette methode permet de verifier quel type d'infos est envoyé(expl: select ou autre)
            const request = new mssql.PreparedStatement(db);
            request.input('email, mssql.VarChar'); 
            request.input('pwd', mssql.Char);

            await request.prepare(querySQL); 

            const result = await request.execute({
                'email': email,
                'pwd': passwordHash
            });

            await resquest.unprepare();  
             //cette syntaxe dit qu'on a fini de preparer et qu'il faut liberer la connexion mtn!!
             return result.recordset[0]['MemberId'];
        }
    
        finally {
            db?.close();
        }
    },

    getByEmail:  async (email) => {
        let db; 
        try {
            const querySQL = "SELECT * FROM Member WHERE Email LIKE @email"; 

            const request = new mssql.PreparedStatement(db); 
            request.input('email', mssql.VarChar(250));
            request.input('pwd', mssql.Char(60));

            await request.prepare(querySQL); 

            const result = await request.execute({
                'email' : email
            });

            await request.unprepare();
            if(result.recordset[0] !== 1) {
                return null
            }
            return memberMapper(result.recordset[0]['MemberId']);
        }
        finally {
            db?.close()
        }

    }

};
module.exports = memberModel;
