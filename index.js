// ======== Fundamentals =======
require("dotenv").config();
const express = require("express"); 
const locationsRouter = require("./routes/locationsRouter");
const workersRouter = require("./routes/workersRouter"); 
const inventoryRouter = require("./routes/inventoryRouter"); 
const userRouter = require("./routes/userRouter");
const loginRouter = require("./routes/loginRouter");

const app = express(); 
app.use(express.json()); // convém colocar isto no código para ter a certeza
// que a informação é convertida em JSON, i.e., para se poder usar json na app

const port = process.env.DATABASE_PORT;
// ==========

app.use("/workers", workersRouter); 
app.use("/locations", locationsRouter); 
app.use("/inventory", inventoryRouter); 

app.use("/register", userRouter);

app.use("/login", loginRouter);



app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})