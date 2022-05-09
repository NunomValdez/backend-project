const Worker = require("./../models/workersModel.js");
// const { all } = require("./../routes/workersRouter.js");
const mongoose = require("mongoose");

exports.allWorkers = async (req, res) => {
    // console.log('Entrámos aqui no allWorkers');
    // await mongoClient.connect("mongodb://localhost:27017", (err, client) => {
    //     if(err) throw err;
    //     const db = client.db("circus_database");
    //     db.collection("workers")
    //     .find()
    //     .toArray((err,result) => {
    //         if (err) throw err;
    //         // console.log(result.length);
    //         res.status(200).json(result);
    //         client.close();
    //     })
    // });
    // res.json('Hello World'); 
    console.log(req.params);
    const allWorkers = await Worker.find();
    console.log({
        'status' : 'success',
        'data' : allWorkers
    });
    res.json(allWorkers);
};


