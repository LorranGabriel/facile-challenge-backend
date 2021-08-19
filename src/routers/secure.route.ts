import express from 'express'
import SecureController from '../controllers/secure.controller';

const secure = express.Router();

secure.post('/', SecureController.encryptData);
secure.get('/encripts/:id', SecureController.accessData);


export default secure