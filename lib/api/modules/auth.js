"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secure = exports.createUser = exports.getUser = exports.decodeToken = exports.loginUser = exports.signIn = undefined;

var _expressJwt = require("express-jwt");

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _user = require("../resources/user/user.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *created by Meshileya Seun <meshileyaseun@gmail.com/> 4/12/18
 * */
const expiresIn = "10d";
const secret = "test.secret";
const checkToken = (0, _expressJwt2.default)({ secret });

/**
 * @param id
 * @returns a token with user id being wrapped
 */
const signIn = exports.signIn = id => _jsonwebtoken2.default.sign({ id }, secret, { expiresIn });

/**
 *
 * @param req
 * @param res
 * @param next
 * checktoken sniffs through the req, decode the token
 */
const validateToken = (req, res, next) => {
  checkToken(req, res, next);
};

const loginUser = exports.loginUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // validate the data coming from the client before processing
  const schema = _joi2.default.object().keys({
    email: _joi2.default.string().email(),
    password: _joi2.default.string().required()
  });

  const result = _joi2.default.validate({ email, password }, schema);

  if (result.error) {
    res.status(400).json({ status: false, message: result.error });
  } else {
    _user.User.findOne({ email }).exec().then(user => {
      if (user) {
        if (user.comparePassword(password)) {
          req.user = user;
          res.status(200).json({ status: true, data: { token: signIn(req.user._id) } });
        } else {
          res.status(401).json({ status: false, message: "Password is incorrect" });
        }
      } else {
        res.status(404).json({
          status: false,
          message: "User does not exist! Kindly register"
        });
      }
    }).catch(error => next(error));
  }
};

/**
 *
 * once the Bearer tokenValue is matched, the validateToken grabs the token from req(request)
 */
const decodeToken = exports.decodeToken = () => (req, res, next) => {
  if (req.headers.access_token) {
    req.headers.authorization = `Bearer ${req.headers.access_token}`;
  }
  validateToken(req, res, next);
};

const getUser = exports.getUser = () => (req, res, next) => {
  _user.User.findById({ _id: req.user.id }).then(user => {
    if (user) {
      req.user = user;
      // get user id and use where necessary
      req.body.user = user.id;
      next();
    } else {
      res.json({ status: false, message: "User not found" });
    }
  }).catch(error => next(error));
};

const createUser = exports.createUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  console.log(req.boody);

  // validate the data coming from the client before processing
  const schema = _joi2.default.object().keys({
    email: _joi2.default.string().email(),
    password: _joi2.default.string().required(),
    username: _joi2.default.string().required()
  });

  const result = _joi2.default.validate({ email, password, username }, schema);

  if (result.error) {
    res.status(400).json({ status: false, message: result.error });
  } else {
    _user.User.findOne({ email }).then(user => {
      if (user) {
        res.status(400).json({ status: false, message: "email already exist" });
      } else {
        const newUser = new _user.User();
        newUser.email = email;
        newUser.username = username;
        newUser.passwordHash = newUser.generateHashPassword(password);

        newUser.save().then(doc => {
          req.user = doc;
          res.status(201).json({ status: true, data: { token: signIn(req.user._id) } });
        }).catch(error => next(error));
      }
    }).catch(error => next(error));
  }
};

const secure = exports.secure = [decodeToken(), getUser()];
//# sourceMappingURL=auth.js.map