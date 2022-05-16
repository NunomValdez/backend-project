const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/circus_database").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));
 
// =========== ObjectId ============
// String.prototype.toObjectId = function() {
//   let ObjectId = (require('mongoose').Types.ObjectId);
//   return new ObjectId(this.toString());
// };
// Every String can be casted in ObjectId now

const Schema = mongoose.Schema({
  // _id: mongoose.Types.ObjectId,  
  name: String, 
  particularity : String,
  shows: Array,
  date_of_admission : Number,
  birthday : Number,
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()

// Schema.methods.catchPhrase = function catchPhrase(){
//   const phrase = `Hello simple Humans, i'm ${this.name} and i'm here to show you something!` 
//   console.log(phrase);
// };
 
const Worker = mongoose.model("worker", Schema);

module.exports = Worker; 