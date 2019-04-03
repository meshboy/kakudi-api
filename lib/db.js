"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise; /**
                                              *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
                                              * */


require("dotenv").config();

console.log(process.env.MONGO_URI);

const connect = exports.connect = () => _mongoose2.default.connect(process.env.MONGO_URI, { useMongoClient: true });
//# sourceMappingURL=db.js.map