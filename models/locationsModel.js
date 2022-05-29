const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/circus_database").then(() =>{
  console.log('Conected to MongoDB');
}).catch((err=>{
  console.log('Error connecting to MongoDB: ', err.message);
}));

const Schema = new mongoose.Schema({
    // _id: mongoose.Types.ObjectId,  
    city: String, 
    country : String,
    population_density: Number,
    age_average: Number
  });

  const Locations  = mongoose.model("Locations", Schema);
  //na collection "Location" tenho a BD populada por objectos (documents) com o desenho do Schema.

  module.exports = Locations;