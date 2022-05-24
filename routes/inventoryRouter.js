const express = require("express");
const { 
    allInventories,
    createInventory,
    updateInventory,
    deleteInventory,
    getInventory,
     } = require("../controllers/inventoryController.js");
const router = express.Router();


router
    .route("/")
    .get(allInventories)
    .post(createInventory); 
router
    .route("/:_id")
    .get(getInventory)
    .patch(updateInventory)
    .delete(deleteInventory);

module.exports = router; 