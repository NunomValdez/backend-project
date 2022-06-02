const Worker = require("./../models/workerModel.js");
const mongoose = require("mongoose");
const auth = require("./../middleware/auth");

// console.log(auth);

exports.allWorkers = async (req, res) => {
    // console.log(req.params);
    const allWorkers = await Worker.find();
    console.log({
        'status' : 'success',
        'data' : allWorkers
    });
    res.send(allWorkers);
};

exports.createWorker = async (req, res) => {
    try{
        const worker = await Worker.create({
            name : req.body.name,
            particularity :  req.body.particularity,
            shows : req.body.shows,
            date_of_admission : req.body.date_of_admission,
            birthday : req.body.birthday
        });
        res.status(201).json(worker);
        // worker._id = mongoose.Types.ObjectId;
        // // worker._id instanceof mongoose.Types.ObjectId;
    }
    catch (err) { console.log(err)};
};

exports.getWorker = async (req,res) => {
    const workerId = req.params._id;
    // console.log(workerId);
    const worker = await Worker.findById(workerId);
    res.send({data: worker});
};
 
exports.updateWorker = async (req, res) => {
    try{
        const workerId = req.params._id;
        //console.log(workerId);
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
  
exports.deleteWorker = async ( req, res) => {
    try{ 
        const workerId = req.params._id;
        const worker = await Worker.findById(workerId);
        console.log(worker);
        worker.delete(); 
        res.status(200).send( `Worker ${worker.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This person was not found, and for that cannot be deleted' });
    }
}

  