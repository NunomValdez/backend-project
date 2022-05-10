const express = require("express");
const { allWorkers,
     createWorker,
     getWorker,
     modifyWorker,
    deleteWorker
     } = require("./../controllers/workersController.js");
const router = express.Router();


router
    .route("/")
    .get(allWorkers)
    .post(createWorker);

router
    .route("/:_id")
//  .get(getWorker)
    .patch(modifyWorker)
//  .delete(deleteWorker)



    module.exports = router; 