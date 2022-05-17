const express = require("express");
const { 
    allLocations,
    createLocation,
    updateLocation,
    deleteLocation,
    findLocation,
     } = require("../controllers/locationsController.js");

const router = express.Router();
 

router
    .route("/")
    .get(allLocations)
    .post(createLocation); 
    // na route raiz, q neste caso está definido no index.js q é a /workers, opera a funcao dentro de ().
router
    .route("/:_id")
    .get(findLocation)
    .patch(updateLocation)
    .delete(deleteLocation);


module.exports = router; 