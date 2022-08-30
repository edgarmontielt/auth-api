const router = require('express').Router()
const User = require('../service')

function users(app) {
    app.use(router)
    const userService = new User()

    router.get('/', async (req, res) => {
        const result = await userService.getAll()
        return res.status(result.success ? 200 : 400).json(result)
    })

    router.post('/register', async (req, res) => {
        const result = await userService.create(req.body)
        return res.status(result.success ? 200 : 400).json(result)
    })

    router.post('/login', async (req, res) => {
        const result = await userService.getOneByEmail(req.body.email)
        return res.status(result.success ? 200 : 400).json(result)
    })
}

module.exports = users