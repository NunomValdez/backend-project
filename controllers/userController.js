require('dotenv').config();
const mongoose = require('mongoose');
const User = require("./../models/userModel");
const bcrypt = require("bcrypt");

//nr de rondas q as passwords vão ser "hasheadas" (variavel global neste ficheiro)
const saltRounds = 10;


mongoose.connect("mongodb://localhost:27017/circus_database")
.then(() =>{
  console.log('Conected to MongoDB');
})
.catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));


exports.userRegister = (req, res) => {
     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB. 
        const newUser = new User({
        email: req.body.username,
        password: hash
        });
         newUser.save(function(error){
            if (error){
                console.log(error);
            }else {
                console.log("Saved in dataBase");
                res.status(200).send("Saved in database - check!");
                //podemos fazer um res.render(página a renderizar), caso nao haja erros no save do user na DB
            }
        })
    });
};


// exports.identifyUser = async (req, res) => {
//  const userIdentify = await User.findOne({email === req.params.username});

// };


//este controller tem de receber o username e pass do utilizador, fazer a hash, verificar 
//se o que está na DB é igual ao input do user... route e model feitos, falta a verificacao e resto do controller
