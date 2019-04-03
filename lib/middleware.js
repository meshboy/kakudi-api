'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const middleware = app => {
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
}; /**
    *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
    **/
exports.default = middleware;
//# sourceMappingURL=middleware.js.map