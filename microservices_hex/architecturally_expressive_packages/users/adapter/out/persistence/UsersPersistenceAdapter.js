// Implement to CreateUserPort
// Implement to UpdateUserPort
// Implement to FindUserPort

class UserPersistenceAdapter {

    // Inject the repository
    constructor(usersRepository) {
        this.usersRepository = usersRepository
    }

    createUser(data){
        return this.usersRepository.create(data)
    }
}

module.exports = UserPersistenceAdapter