"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _secureroute = require('./routers/secure.route'); var _secureroute2 = _interopRequireDefault(_secureroute);



class App {
    

     constructor (){
        this.express = _express2.default.call(void 0, )
        this.middlewares()

        this.express.use('/', _secureroute2.default)
        this.express.use("*", (req,res) => res.status(404).json({error: "not found"}))
    }

     middlewares() {
        this.express.use(_express2.default.json())
        this.express.use(_express2.default.urlencoded({ extended: true }));

    }
}

exports. default = new App().express

