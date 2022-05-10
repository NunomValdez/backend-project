const Worker = require("./../models/workerModel.js");
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

exports.createWorker = async (req, res) => {

    const newWorker = await new Worker(req.body);

    // newWorker._id = Worker.length + 1;

    const worker = await newWorker.save();
    console.log(worker);

    res.json({
        'status': 'success',
        'data': worker
    })
};

exports.modifyWorker = async (req, res) => {
    try{
        const workerId = req.params._id;
        console.log(workerId);
        // const worker = await Worker.findById(workerId);
        const worker = await Worker.findById(workerId);
        Object.assign(worker, req.body); //vai atribuir(assign) o body vindo do request, ao objecto worker
        worker.save();

        res.send({ data: worker });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This person was not found' });
    }
};
