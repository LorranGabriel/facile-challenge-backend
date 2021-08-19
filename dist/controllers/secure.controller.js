"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _secureDAO = require('../dao/secureDAO'); var _secureDAO2 = _interopRequireDefault(_secureDAO);
var _validatorjs = require('validatorjs'); var _validatorjs2 = _interopRequireDefault(_validatorjs);
var _cryptr = require('cryptr'); var _cryptr2 = _interopRequireDefault(_cryptr);


class SecureController{

    static async encryptData(req ,res){
        const {body} = req;     
        const validation = new (0, _validatorjs2.default)(body,{name: "string|required"});

        try {
            if(validation.passes()){
                const crypt = new (0, _cryptr2.default)('shazam');
                let encriptName = crypt.encrypt(body.name);

                let data = await _secureDAO2.default.insertName(encriptName);                
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
        
        const validation = new (0, _validatorjs2.default)({id}, {id: 'numeric|required'});
        
        try {
            if(validation.passes()){
                
                let data = await _secureDAO2.default.getNameById(id);  
                                              
                const crypt = new (0, _cryptr2.default)('shazam');

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

exports. default = SecureController
