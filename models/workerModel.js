// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/circus_database").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));
 

const Schema = new mongoose.Schema({

  name: {type:String, required: true},
  particularity : String,
  shows: {type: Array, required: true },
  date_of_admission : {
    type: Date,
    immutable: true,
    default: ()=> Date.now()
  },
  birthday : Number
});

 
const Worker = mongoose.model("worker", Schema);

module.exports = Worker; 