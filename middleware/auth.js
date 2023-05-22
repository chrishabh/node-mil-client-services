const jwt = require('jsonwebtoken');


function checkAuth(req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Auth token missing in header",
            });
        }
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'secret');
        req.userData = decodedToken;
        next();
    } catch (err) {
        res.failure(err);
    }
}

module.exports = {
    checkAuth: checkAuth
}