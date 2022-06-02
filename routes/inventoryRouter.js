const express = require("express");
const { 
    allInventories,
    createInventory,
    updateInventory,
    deleteInventory,
    getInventory,
     } = require("../controllers/inventoryController.js");
const auth = require("../middleware/auth.js");
const router = express.Router();


router
    .route("/")
    .get( auth, allInventories )
    .post( auth, createInventory ); 
router
    .route("/:_id")
    .get( auth, getInventory )
    .patch( auth, updateInventory )
    .delete( auth, deleteInventory );

module.exports = router; 