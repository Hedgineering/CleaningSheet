"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetpassword = exports.forgotpassword = exports.login = exports.register = void 0;
const register = (req, res, next) => {
    res.send('Register Route');
};
exports.register = register;
const login = (req, res, next) => {
    res.send('Login Route');
};
exports.login = login;
const forgotpassword = (req, res, next) => {
    res.send('Forgot Password Route');
};
exports.forgotpassword = forgotpassword;
const resetpassword = (req, res, next) => {
    res.send('Reset Password Route');
};
exports.resetpassword = resetpassword;
