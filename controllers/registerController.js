require('dotenv').config();
const mongoose = require('mongoose');
const User = require("../models/userModel");
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


exports.userRegister = async (req, res) => {
  try{
        const { username, password } = req.body;

        if( !username || !password ){ //se nao houver nada nestes parametros, obrigar a preencher
          return res
          .status(400)
          .json({ msg: "Not all fields have been entered."});
        }

        const existingUsername = await User.findOne({username: username}); //verificamos se existe algum user na BD com este username

        if(existingUsername){ //se existir, avisamos q já existe -  escolher outro nome (para n repetir nada na BD)
          return res
          .status(400)
          .json({msg: "This username already exists."});
        };

          //agora, verificamos se a pass tem mais de 5 caracteres. Se sim, cria o registo, já com a pass encriptada pelo bcrypt!
          if( password.length < 5 ){
          return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long."});
        }else {
              bcrypt.hash(password, saltRounds, function(err, hash) {
                // Store hashed password in DB:
                const newUser = new User({
                username: username,
                password: hash
                });
                newUser.save(function(error){
                    if (error){
                        console.log(error);
                    }else {
                        console.log("Saved in dataBase");
                        res.status(201).send("Saved in database - check!");
                        //podemos fazer um res.render(página a renderizar), caso nao haja erros no save do user na DB
                    }
                })
            });
        }
        // if(password !== passwordCheck){
        //   return res
        //   .status(400)
        //   .json({msg: "Password's wrong. Please try again."});
        // }

  }  catch (err) {
    console.log(err.message);
  }

};


// exports.identifyUser = async (req, res) => {
//  const userIdentify = await User.findOne({email === req.params.username});

// };


//este controller tem de receber o username e pass do utilizador, fazer a hash, verificar 
//se o que está na DB é igual ao input do user... route e model feitos, falta a verificacao e resto do controller
