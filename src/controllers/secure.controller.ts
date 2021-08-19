
import SecureDAO from "../dao/secureDAO";
import Validator from "validatorjs";
import cryptr from "cryptr";


class SecureController{

    static async encryptData(req ,res){
        const {body} = req;     
        const validation = new Validator(body,{name: "string|required"});

        try {
            if(validation.passes()){
                const crypt = new cryptr('shazam');
                let encriptName = crypt.encrypt(body.name);

                let data = await SecureDAO.insertName(encriptName);                
                res.status(200).send(data.rows[0])     
            }

            else{
                res.status(400).send({
                    "code": "E_VALIDATION_FAILURE",
                    "message": "O campo 'name' é obrigatório"
                })     
            }

        } catch (error) {
            res.status(503).send({
                "code": "E_VALIDATION_FAILURE",
                "message": "O campo 'name' é obrigatório"
            })  
            throw new Error(error);    
        }
    }


    static async accessData(req,res){

        const {id} = req.params;     
        
        const validation = new Validator({id}, {id: 'numeric|required'});
        
        try {
            if(validation.passes()){
                
                let data = await SecureDAO.getNameById(id);  
                                              
                const crypt = new cryptr('shazam');

                data.rows[0].encripted_name = await crypt.decrypt(data.rows[0].encripted_name)

                res.status(200).send(data.rows[0])     
            }
            else{
                res.status(400).send({
                    "code": "E_VALIDATION_FAILURE",
                    "message": "O campo 'id' é obrigatório"
                })     
            }
        } catch (error) {            
            res.status(503).send({
                "code": "E_VALIDATION_FAILURE",
                "message": "O campo 'id' é obrigatório"
            })    
            throw new Error(error); 
        }
    }
}

export default SecureController
