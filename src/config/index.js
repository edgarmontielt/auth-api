require('dotenv').config()

const config = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    production: process.env.NODE_ENV === 'production',
    development: process.env.NODE_ENV === 'development',
}

module.exports = config