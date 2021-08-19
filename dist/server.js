"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
var _secureDAO = require('./dao/secureDAO'); var _secureDAO2 = _interopRequireDefault(_secureDAO);


require('dotenv').config();

const port = process.env.PORT || 5000

// var conn = {
//     host: process.env.HOST, 
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.USER_PG,
//     password: process.env.USER_PASS,
// }

var conn = process.env.DATABASE_URL

_app2.default.listen(port, async () => {
    await _secureDAO2.default.injectDB(conn);
    console.log(`Listening on port ${port}`);
})
