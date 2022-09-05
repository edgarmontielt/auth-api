const router = require('express').Router()
const setLocalCookie = require('../../helpers/cookie')
const Auth = require('../service')

function auth(app) {
    app.use(router)
    const authService = new Auth()

    router.post('/register', async (req, res) => {
        const result = await authService.register(req.body)
        if (result.success) {
            return setLocalCookie(result, res)
        }
        return res.status(400).json(result)
    })

    router.post('/login', async (req, res) => {
        console.log(req.body);
        const result = await authService.logIn(req.body)
        if (result.success) {
            return setLocalCookie(result, res)
        }
        return res.status(400).json(result)
    })

    router.post('/validate', async (req, res) => {
        
    })
}

module.exports = auth