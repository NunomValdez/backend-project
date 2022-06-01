require('dotenv').config();
const mongoose = require('mongoose');
const User = require("./../models/userModel");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/circus_database")
.then(() =>{
  console.log('Conected to MongoDB');
})
.catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));



exports.userLogin = async (req, res) => {

    User.findOne({email: req.body.username}, function(err, foundUser){
        if ( err ){
            console.log(err);
        }else{
            if(foundUser){
                bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
                    // result == true
                   if(result){
                        console.log("Login successfull");
                        res.status(200).send("login ok");
                   }else{
                    //    console.log(err);  Este err, da funcao callback, é undefined, pq motivo? n faz sentido, pq devia ser o erro q daria caso a comparacao das passes n fosse correcta
                       res.status(401).send("You don't have acess to this information, sorry");
                   }
                });
                    
            }
        }
    });
};