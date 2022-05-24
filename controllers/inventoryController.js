const Inventory = require ("./../models/inventoryModel");


exports.allInventories = async (req, res) => {
    // console.log(req.params);
    const allInventories = await Inventory.find();
    console.log({
        'status' : 'success',
        'data' : allInventories
    });
    res.send(allInventories);
};

exports.createInventory = async (req, res) => {
    try{
        const inventory = await Inventory.create({
            name : req.body.name,
            type :  req.body.type,
            date_of_purchase : req.body.date_of_purchase,
            price : req.body.price
        });
        res.status(201).json(inventory);
    }
    catch (err) { console.log(err)};
};

exports.getInventory = async (req,res) => {
    const inventoryId = req.params._id;
    const inventory = await Inventory.findById(inventoryId);
    res.send({data: inventory});
};

exports.updateInventory = async (req, res) => {
    try{
        const inventoryId = req.params._id;
        const inventory = await Inventory.findById(inventoryId);
        Object.assign(inventory, req.body); //vai atribuir(assign) o body vindo do request, ao objecto Inventory
        inventory.save();
        res.send({ data: inventory });
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This person was not found' });
    }
};
  
exports.deleteInventory = async ( req, res) => {
    try{ 
        const inventoryId = req.params._id;
        const inventory = await Inventory.findById(inventoryId);
        console.log(inventory);
        inventory.delete(); 
        res.status(200).send( `The material ${inventory.name} was deleted from the DataBase` );
    }catch (e){
        console.log(e.message);
        res.status(404).send({ error: 'This was not found in Inventory' });
    }
}

  