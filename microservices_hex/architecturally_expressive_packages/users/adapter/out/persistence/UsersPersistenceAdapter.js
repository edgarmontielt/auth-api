// Implement to CreateUserPort
// Implement to UpdateUserPort
// Implement to FindUserPort

class UserPersistenceAdapter {

    // Inject the repository
    constructor(usersRepository) {
        this.usersRepository = usersRepository
    }

    getAllUsers() {
        return this.usersRepository.getAll()
    }

    createUser(data){
        return this.usersRepository.create(data)
    }
}

module.exports = UserPersistenceAdapter