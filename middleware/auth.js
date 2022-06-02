const jwt = require("jsonwebtoken");

const auth =  (req, res, next) => {
    
        const token = req.header("x-auth-token");
        if(!token){
            return res
            .status(401)
            .json({ msg: " No authentication token, authorization denied."});
        };
        //Grabbing out jwt token, passing our JWT_SALT and checking it cordinates with our user we've selected
         const verified = jwt.verify(token, process.env.JWT_SALT);

        if(!verified){
            return res
            .status(401)
            .json({ msg: "Token verification failled, authorization denied" });
        };
       
    //    verified.id = req.user;
        next()

};

module.exports = auth;

