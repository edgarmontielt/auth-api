const GetAllUsersHandlerFactory = (userService) => {
    return async (req, res) => {
        try {
            const users = await userService.findAll()
            return res.json(users)
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'An error ocurred'
            })
        }
    }
}

module.exports = GetAllUsersHandlerFactory