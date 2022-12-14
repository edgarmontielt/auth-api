const { production } = require("../../config")

function tokenToCookie(res, result, statusCode) {
    if (result.success) {
        const { token, ...data } = result
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            expires: new Date(new Date().setDate(new Date().getDate() + 7))
        }).redirect('http://localhost:3000')
    }
    return res.status(statusCode).json(result)
}

function tokenToCookieLocal(res, result, statusCode){
    if (result.success) {
        const { token, ...data } = result
        return res.cookie("token", token, {
            httpOnly: true,
            secure: production,
            sameSite: "none",
            expires: new Date(new Date().setDate(new Date().getDate() + 7))
        }).json(result.user)
    }
    return res.status(statusCode).json(result)
}

module.exports = { tokenToCookie, tokenToCookieLocal }