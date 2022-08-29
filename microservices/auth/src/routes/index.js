const router = require('express').Router()
const Auth = require('../service')


function auth(app) {
    app.use(router)
    const authService = new Auth()

    router.post('/register', async (req, res) => {
        const result = await authService.register(req.body)
        return res.status(result.success ? 200 : 400).json(result)
    })
}

module.exports = auth