const jsonwebtoken = require("jsonwebtoken")
const { jwtSecret } = require("../config")

const authValidation = () => {
    return (req, res, next) => {
        return validateToken(req, res, next)
    }
}

const validateToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) return res.status(403).json({
        success: false,
        message: 'No token provider'
    })
    return verifyToken(token, req, res, next)
}

const verifyToken = (token, req, res, next) => {
    try {
        const decoded = jsonwebtoken.verify(token, jwtSecret)
        delete decoded.iat
        delete decoded.exp
        
        return next()
    } catch ({ message, name }) {
        return res.status(403).json({
            success: false,
            message,
            type: name
        })
    }
}

module.exports = authValidation