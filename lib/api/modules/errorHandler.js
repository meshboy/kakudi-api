"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
 * */
const errorHandler = exports.errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    status: false,
    message: error.toString() || "something went wrong. Please try again"
  });
};
//# sourceMappingURL=errorHandler.js.map