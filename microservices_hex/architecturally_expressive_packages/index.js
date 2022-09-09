const express = require('express')
const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log('Running in: http://localhost:' + port)
})

