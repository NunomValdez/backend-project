
// ======== Fundamentals =======
const express = require("express"); 

const workersRouter = require("./routes/workersRouter"); 


const app = express(); 
const port = 3000; 
app.use(express.json()); // convém colocar isto no código para ter a certeza
                        // que a informação é convertida em JSON
// ==========

app.use("/workers", workersRouter); 
// define que a app irá usar determinados models, em determinada Route
//app.use("...", countriesRouter); 
//app.use("...", Router); 



app.listen(port, ()=>{
    console.log('App is listening on port ' + port);
})