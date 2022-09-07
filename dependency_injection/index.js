const express = require('express')
const UsersService = require('./features/UsersService')
const CreateUserHandlerFactory = require('./handlers/CreateUserHandlerFactory')
const GetAllUsersHandlerFactory = require('./handlers/GetAllUsersHandlerFactory')
const UserRepository = require('./UserRepository')

const PORT = 4000
const app = express()
app.use(express.json())

let data = [] // DB

const usersService = UsersService(new UserRepository(data))

app.get('/', GetAllUsersHandlerFactory(usersService))

app.post('/', CreateUserHandlerFactory(usersService))

app.put('/', async (req, res) => { 
    const body = req.body
    data.push(body)

    return res.json(body)
})

app.listen(PORT, () => {
    console.log(`Running in: http://localhost:${PORT}`);
})