const express = require('express')
const { port } = require('./src/config')

const app = express()

app.listen(port, () => {
    console.log('Running in: http://localhost:' + port);
})