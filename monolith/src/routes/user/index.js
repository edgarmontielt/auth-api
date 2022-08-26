const { Router } = require("express");
const authValidation = require("../../middlewares/auth");
const User = require('../../services/user')

function users(app) {
    const router = Router()
    app.use('/api/users', router)
    const userService = new User()

    router.get('/', (req, res) => res.json({ 'hello': 'Mundo' }))

    router.get('/all', authValidation(), async (req, res) => {
        const users = await userService.getAll()
        return res.json(users)
    })
}

module.exports = users