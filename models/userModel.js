require('dotenv').config();
const req = require('express/lib/request');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: {
        type: String, 
        required: true, 
        min: 6
    }
});


const User = mongoose.model("users", userSchema);

module.exports = User;