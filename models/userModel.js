require('dotenv').config();
const req = require('express/lib/request');
const md5 = require("md5");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: req.body.username,
    password: md5(req.body.password)
});


const User = mongoose.model("users", userSchema);

module.exports = User;