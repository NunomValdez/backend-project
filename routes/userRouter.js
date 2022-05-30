const express = require("express");
const { userRegister } = require("./../controllers/userController");
const router = express.Router();

router
    .route("/")
    .post(userRegister);

    module.exports = router;