require('dotenv').config();
const md5 = require("md5");
const mongoose = require('mongoose');
const User = require("./../models/userModel");

mongoose.connect("mongodb://localhost:27017/circus_database")
.then(() =>{
  console.log('Conected to MongoDB');
})
.catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));


// exports.identifyUser = async (req, res) => {
//  const userIdentify = await User.findOne({email === req.params.username});

// };
