'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = _http2.default.createServer(_server2.default); /**
                                                               *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
                                                               * */

let currentApp = _server2.default;

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map