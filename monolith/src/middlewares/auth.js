const jsonwebtoken = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const authValidation = () => {
    return (req, res, next) => {
        return validateToken(req, res, next);
    };
};

const validateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
        return res.status(403).json({
            success: false,
            message: "No token provider",
        });
    return verifyToken(token, req, res, next);
};

const verifyToken = (token, req, res, next) => {
    try {
        const decoded = jsonwebtoken.verify(token, jwtSecret);
        delete decoded.iat;
        delete decoded.exp;
        req.user = decoded;
        return verifyRole(req, res, next);
    } catch ({ message, name }) {
        return res.status(403).json({
            success: false,
            message,
            type: name,
        });
    }
};

const verifyRole = (req, res, next) => {
    if (req.user.role != "ADMIN") {
        return res.status(401).json({
            success: false,
            message: "Insuficient permissions",
        });
    } else if (req.user.role === "ADMIN") {
        return next();
    }
};

module.exports = authValidation;
