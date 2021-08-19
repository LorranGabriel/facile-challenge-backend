"use strict";Object.defineProperty(exports, "__esModule", {value: true});const { Client } = require('pg');


let db


class SecureDAO {

    static async injectDB(conn  ){
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

    static async insertName(encriptName ){
        var queryConfig = {
            text: 'INSERT INTO shazam.encryptData(encripted_name) VALUES($1) RETURNING id,encripted_name;',
            values: [encriptName]
          };
        
        return await db.query(queryConfig);
    }


    static async getNameById(id ){
        var queryConfig = {
            text: 'SELECT * FROM shazam.encryptData where id = $1;',
            values: [id]
          };
        return await db.query(queryConfig);

    }
}


exports. default = SecureDAO

