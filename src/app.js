const express = require('express')
const morgan = require('morgan')
const auth = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

auth(app)

module.exports = app