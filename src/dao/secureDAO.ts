const { Client } = require('pg');


let db


class SecureDAO {

    static async injectDB(conn : string ){
        try {
            db = new Client({
                connectionString: conn,
                ssl: {
                  rejectUnauthorized: false
                }
              });
            db.connect();

        } catch (error) {
            throw new Error();
        }
    }

    static async insertName(encriptName : string){
        var queryConfig = {
            text: 'INSERT INTO shazam.encryptData(encripted_name) VALUES($1) RETURNING id,encripted_name;',
            values: [encriptName]
          };
        
        return await db.query(queryConfig);
    }


    static async getNameById(id : number){
        var queryConfig = {
            text: 'SELECT * FROM shazam.encryptData where id = $1;',
            values: [id]
          };
        return await db.query(queryConfig);

    }
}


export default SecureDAO

