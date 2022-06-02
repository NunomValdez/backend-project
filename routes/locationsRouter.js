const express = require("express");
const { 
    allLocations,
    createLocation,
    updateLocation,
    deleteLocation,
    findLocation,
     } = require("../controllers/locationsController.js");
const auth = require("../middleware/auth.js");


const router = express.Router();
 

router
    .route("/")
    .get( auth, allLocations)
    .post( auth, createLocation); 
    // na route raiz, q neste caso está definido no index.js q é a /workers, opera a funcao dentro de ().
router
    .route("/:_id")
    .get( auth, findLocation)
    .patch( auth, updateLocation)
    .delete( auth, deleteLocation);


module.exports = router; 