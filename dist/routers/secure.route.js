"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _securecontroller = require('../controllers/secure.controller'); var _securecontroller2 = _interopRequireDefault(_securecontroller);

const secure = _express2.default.Router();

secure.post('/', _securecontroller2.default.encryptData);
secure.get('/encripts/:id', _securecontroller2.default.accessData);


exports. default = secure