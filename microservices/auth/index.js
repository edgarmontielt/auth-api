const express = require('express')
const morgan = require('morgan')
const { port } = require('./src/config')
const auth = require('./src/routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

auth(app)

app.listen(port, () => {
    console.log('Running in: http://localhost:' + port);
})