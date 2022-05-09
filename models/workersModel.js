const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/circus_database").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}))

const Schema = mongoose.Schema({
    _id: Number,
    name: String,
    particularity : String,
    shows: Array,
    date_of_submission : Number,
    birthday : Number
  });

const Worker = mongoose.model("workers", Schema);


module.exports = Worker;