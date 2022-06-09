const express = require("express");
const { allWorkers,
     createWorker,
     getWorker,
     updateWorker,
    deleteWorker
     } = require("./../controllers/workersController.js");
const router = express.Router();
const auth = require("../middleware/auth.js");

router
    .route("/workers/")
    .get( auth, allWorkers)
    .post( auth, createWorker); 
    // na route raiz, q neste caso está definido no index.js q é a /workers, opera a funcao dentro de ().
router
    .route("/workers/:_id")
    .get( auth, getWorker)
    .patch( auth, updateWorker)
    .delete( auth, deleteWorker);

    module.exports = router; 