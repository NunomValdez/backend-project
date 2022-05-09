const express = require("express");
const { allWorkers } = require("./../controllers/workersController.js");
const router = express.Router();


router
    .route("/")
    .get(allWorkers);


    module.exports = router; 