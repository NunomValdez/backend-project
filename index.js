
// ======== Fundamentals =======
const express = require("express"); 
const locationsRouter = require("./routes/locationsRouter");
const workersRouter = require("./routes/workersRouter"); 


const app = express(); 
const port = 3000; 
app.use(express.json()); // convém colocar isto no código para ter a certeza
                        // que a informação é convertida em JSON
// ==========

app.use("/workers", workersRouter); 
app.use("/locations", locationsRouter); 
// define que a app irá usar determinados models, em determinada Route
//app.use("...", countriesRouter); 
//app.use("...", Router); 



app.listen(port, ()=>{
    console.log('App is listening on port ' + port);
})