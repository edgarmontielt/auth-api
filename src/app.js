const cookieParser = require('cookie-parser')
const express = require('express')
const morgan = require('morgan')
const { jwtSecret } = require('./config')
const auth = require('./routes/auth')
const users = require('./routes/user')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser(jwtSecret))

app.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

auth(app)
users(app)

module.exports = app