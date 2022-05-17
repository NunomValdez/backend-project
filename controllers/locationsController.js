const Locations = require("../models/locationsModel");
const mongoose = require("mongoose");


exports.allLocations = async (req, res) => {
    // console.log(req.params);
    const allLocations = await Locations.find();
    console.table({
        'status' : 'success',
        'data' : allLocations
    });
    res.send(allLocations);
};

exports.createLocation = async (req, res) => {
    try{
        const location = await Locations.create({
        city: req.body.city,
        country : req.body.country,
        population_density : req.body.population_density,
        age_average : req.body.age_average
    });
    res.status(201).json(location);
    } 
    catch (error){
        // res.status(406).send('This location was not registered');
        console.log(error);
    }
};

exports.updateLocation = async (req, res) => {
   try{
       const locationId = req.params._id;
        const location = await Locations.findById(locationId);
        Object.assign(location, req.body);
        location.save();
        res.send({ data: location});
   } 
   catch (error){
       console.table(error.message);
       res.status(404).send({ error: 'The Circus is not gonna act at that place' });
   }

};

exports.findLocation = async (req, res) => {
    try{
        const locationId = req.params._id;
        const location = await Locations.findById(locationId);
        res.send({data: location});
    }
    catch (err){
        console.log(err.message);
        res.send({data: 'Location not found at DataBase'});
    }
}

exports.deleteLocation = async (req, res) => {
    try{
        const locationId = req.params._id;
        console.log(locationId);
        const location = await Locations.findById(locationId);
        location.delete();
        res.status(200).send( `Location ${location.name} was deleted from DataBase, and the Circus will not act there.` );
    }
    catch (err){
        console.table(err.message);
        res.status(404).send({ error: 'This location was not found, and for that cannot be deleted' });
    } 
}; 
    
//     // try{
//     //     console.log('entrámos na funcao create');
//     //     const newWorker = await new Worker(req.body);
//     //     console.log(newWorker);
//     //     newWorker._id = new mongodb.ObjectId();
//     //     const worker = await newWorker.save();
//     //     console.log(worker);

//     //     res.send({
//     //         'status': 'success',
//     //         'data': worker  
//     //     }); 
//     // } catch(err){
//     //     console.log(err.message);
//     //     res.status(404).send({ error: 'This person cannot be created' });
//     // }

// };

// exports.getWorker = async (req,res) => {
//     const workerId = req.params._id;
//     console.log(workerId);
//     const worker = await Worker.findById(workerId);
//     res.send({data: worker});
// };

// exports.updateWorker = async (req, res) => {
//     try{
//         const workerId = req.params._id;
//         console.log(workerId);
//         // const worker = await Worker.findById(workerId);
//         const worker = await Worker.findById(workerId);
//         Object.assign(worker, req.body); //vai atribuir(assign) o body vindo do request, ao objecto worker
//         worker.save();
//         res.send({ data: worker });
//     }catch (e){
//         console.log(e.message);
//         res.status(404).send({ error: 'This person was not found' });
//     }
// };
  
// exports.deleteWorker = async ( req, res) => {
//     try{ 
//         const workerId = req.params._id;
//         console.log(workerId);
//         // const worker = await Worker.findById(workerId);
//         const worker = await Worker.findById(workerId);
//         console.log(worker);
//         worker.delete(); 
//         res.status(200).send( `Worker ${worker.name} was deleted from the DataBase` );
//     }catch (e){
//         console.log(e.message);
//         res.status(404).send({ error: 'This person was not found, and for that cannot be deleted' });
//     }
// }

  