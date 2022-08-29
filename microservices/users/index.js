const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { port } = require('./src/config')
const users = require('./src/routes')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

const corsOptions = {
    origin: ['http://localhost:4000']
}

app.use(cors(corsOptions))

users(app)

app.listen(port, () => {
    console.log('Running in: http://localhost:' + port)
})