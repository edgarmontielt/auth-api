const router = require('express').Router()
const setLocalCookie = require('../../helpers/cookie')
const Auth = require('../service')

function auth(app) {
    app.use(router)
    const authService = new Auth()

    router.post('/register', async (req, res) => {
        const result = await authService.register(req.body)
        return setLocalCookie(result, res)
    })

    router.post('/login', async (req, res) => {
        const result = await authService.logIn(req.body)
        return setLocalCookie(result, res)
    })
}

module.exports = auth