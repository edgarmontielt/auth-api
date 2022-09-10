class UsersController {
    constructor(createUserUseCase){
        this.createUserUseCase = createUserUseCase
    }

    async createUser(req, res) {
        console.log(req.body);
        const user = await this.createUserUseCase.createUser(req.body)
        console.log(user);
        return res.json(user)
    }
}

module.exports = UsersController