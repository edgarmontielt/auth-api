
// The service should implement of the interface CreateUserUseCase
class UserService {
    // createUserPort: CreateUserPort //TS
    #createUserPort
    constructor(createUserPort) {
        this.#createUserPort = createUserPort
    }

    createUser(data) {
        return this.#createUserPort.createUser(data)
    }
}

module.exports = UserService