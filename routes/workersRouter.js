const express = require("express");
const { allWorkers,
     createWorker,
     getWorker,
     updateWorker,
    deleteWorker
     } = require("./../controllers/workersController.js");

const router = express.Router();
 

router
    .route("/")
    .get(allWorkers)
    .post(createWorker); 
    // na route raiz, opera a funcao dentro de ().
router
    .route("/:_id")
    .get(getWorker)
    .patch(updateWorker)
    .delete(deleteWorker);



    module.exports = router; 