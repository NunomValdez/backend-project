require('dotenv').config();
const mongoose = require('mongoose');
const User = require("./../models/userModel");
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');

mongoose.connect("mongodb://localhost:27017/circus_database")
.then(() =>{
  console.log('Conected to MongoDB');
})
.catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));


exports.userLogin = async (req, res) => {
    try{
        const { username, password } = req.body; //user and password from client's request
        
        await User.findOne({"username": username}, function(err, foundUser){
            if ( err ){
                console.log(err.message);
            }
            else{
                if(foundUser){ //caso encontremos um user com aquele username, comparar as passes e se forem =, login feito! falta ver o token p mandar no header em cada request
                    bcrypt.compare(password, foundUser.password, function(err, result) {
                        // result == true
                    if(result){
                        // GERAR TOKEN AQUI
                        const token = sign(
                            { 
                                username,
                                password
                            }, 
                            process.env.JWT_SALT
                        );
                        // console.log(token);

                        console.log(`${username}, you've logged in`);
                            // console.log(token);
                        res.status(200)
                        .json({
                            token: token,
                            user: username
                        });
        // console.log(res);
            //gerar um token login, e enviar neste .send, para enviar po cliente
                    }else{
                        //    console.log(err);  Este err, da funcao callback, é undefined, pq motivo? n faz sentido, pq devia ser o erro q daria caso a comparacao das passes n fosse correcta
                        res.status(401).send("You don't have acess to this information, sorry");
                    }
                    });
                        
                }
            }
        });
    } 
    catch (err){
        console.log(err.message);
    }


};