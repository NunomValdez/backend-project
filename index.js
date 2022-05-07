import express from "express"; //em vez de fazermos como nas aulas (const... require('express))
//podemos fazer um import, mais de acordo com ES modules.

// ======== Fundamentals =======
const app = express(); 
const port = 3000; 
app.use(express.json()); // convém colocar isto no código para ter a certeza
                        // que a informação é convertida em JSON
// ==========


app.listen(port, ()=>{
    console.log('App is listening on port ' + port);
})