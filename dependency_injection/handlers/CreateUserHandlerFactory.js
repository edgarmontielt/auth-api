const CreateUserHandlerFactory = (userService) => {
    return async (req, res) => {
        try {
            console.log(req.body);
            const users = await userService.create(req.body)
            return res.json(users)
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'An error ocurred'
            })
        }
    }
}

module.exports = CreateUserHandlerFactory