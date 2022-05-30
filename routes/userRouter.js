const express = require("express");
const { userRegister, userLogin } = require("./../controllers/userController");
const router = express.Router();

router
    .route("/")
    .post(userRegister)
    .post(userLogin);

    module.exports = router;