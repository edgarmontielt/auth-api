const express = require('express')
const auth = require('./routes/auth/')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})

auth(app)

module.exports = app