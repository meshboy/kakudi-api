'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./db');

var _auth = require('./api/modules/auth');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _router = require('./api/router');

var _errorHandler = require('./api/modules/errorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
 * */
const app = (0, _express2.default)();

(0, _middleware2.default)(app);
(0, _db.connect)();

app.use('/login', _auth.loginUser);
app.use('/register', _auth.createUser);
app.use('/api/v1/', _auth.secure, _router.router);
app.use(_errorHandler.errorHandler);
exports.default = app;
//# sourceMappingURL=server.js.map