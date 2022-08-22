const { Router } = require("express");
const AuthService = require("../../services/authService");
const { tokenToCookieLocal } = require("../../helpers/auth/tokenToCookie");

function auth(app) {
    const router = Router()

    app.use('/api/auth', router)

    const authService = new AuthService()
    
    router.post('/login', async (req, res) => {
        const result = await authService.logIn(req.body)
        return tokenToCookieLocal(res, result, 401)
    })

    router.post('/register', async (req, res) => {
        const result = await authService.register(req.body)
        return tokenToCookieLocal(res, result, 401)
    })
}

module.exports = auth