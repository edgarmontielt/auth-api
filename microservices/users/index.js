const express = require('express')
const morgan = require('morgan')
const { port } = require('./src/config')
const users = require('./src/routes')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

users(app)

app.listen(port, () => {
    console.log('Running in: http://localhost:' + port)
})