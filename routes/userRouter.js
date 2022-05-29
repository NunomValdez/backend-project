const express = require("express");
const { identifyUser } = require("./../controllers/userController");
const router = express.Router();

router
    .route("/")
    .post(identifyUser);

    module.exports = router;