class UsersController {
    constructor(createUserUseCase){
        this.createUserUseCase = createUserUseCase
    }

    createUser(req, res) {
        const user = this.createUserUseCase.createUser(req.body)
        return res.json(user)
    }
}

module.exports = UsersController