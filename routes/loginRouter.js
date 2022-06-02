const express = require("express");
const { userLogin } = require("./../controllers/loginController");
const router = express.Router();

// if(login){

//}
router
    .route("/")
    .post(userLogin);

    module.exports = router;