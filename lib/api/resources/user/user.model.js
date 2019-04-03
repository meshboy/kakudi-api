'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose2.default.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'User must have a unique email address']
    },

    username: {
        type: String,
        required: [true, 'Name is required']
    },

    passwordHash: {
        type: String,
        required: [true, 'Password is required']
    }
}, {
    timestamps: true
});

userSchema.methods.generateHashPassword = function (password) {
    const saltRounds = _bcryptNodejs2.default.genSaltSync(10);
    return _bcryptNodejs2.default.hashSync(password, saltRounds);
};

userSchema.methods.comparePassword = function (password) {
    return _bcryptNodejs2.default.compareSync(password, this.passwordHash);
};

const User = exports.User = _mongoose2.default.model('User', userSchema);
//# sourceMappingURL=user.model.js.map