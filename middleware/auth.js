const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try{
        const token = req.header("x-auth-token");
        if(!token){
            return res
            .status(401)
            .json({ msg: " No authentication token, authorization denied."});
        }
        //Grabbing out jwt token, passing our JWT_SECRET and checking it cordinates with our user we've selected
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // const tokenHeader = sign({ 
        //     username,
        //     password }, 
        //     process.env.JWT_SALT, 
        //     { expiresIn:120 },
        //     );
        // tokenHeader.header({
        //     "typ": "JWT",      
        //     "alg": "HS256"      //alg = algorith used
        //   });

        if(!verified){
            return res
            .status(401)
            .json({ msg: "Token verification failled, authorization denied" });
        }
       
    //    verified.id = req.user;
        next()

    } catch (err){
        res.status(500).json({ error: err.message});
    }
};

module.exports = auth;

