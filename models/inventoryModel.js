const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/circus_database")
.then(() =>{
  console.log('Conected to MongoDB');
})
.catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));
 
 // === Schema 
const Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type : String,
    date_of_purchase : {
        type : Date,
        required : true,
        default: ()=> Date.now()
    },
    price : {
        type:Number,
        required : true
    }
  });
 

const Inventory = mongoose.model("inventory", Schema);

module.exports = Inventory;