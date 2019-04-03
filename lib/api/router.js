'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _errorHandler = require('./modules/errorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
 * */
const router = exports.router = _express2.default.Router();
router.use(_errorHandler.errorHandler);
//# sourceMappingURL=router.js.map