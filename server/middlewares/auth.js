const jwt = require("jsonwebtoken");

const isAuthenticated = async(req, res, next) => {
    const token = await req.cookies.token;

    try {
        if(!token) {
            return res.status(401).json({message: "user is not authenticated please login!"});
        }

        const decode = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userId = decode.userId;
        next();

    } catch (error) {
        return res.status(500).json({error: "Internal Server Error"})
    }
}
module.exports = isAuthenticated;