require('dotenv').config();
const req = require('express/lib/request');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true, 
        minlength: 6 
        }
});



const User = mongoose.model("users", userSchema);

module.exports = User;