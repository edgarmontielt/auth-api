function UsersService(userRepository) {
    return {
        findAll:  function () {
            return userRepository.findAll()
        },
        create: function(data) {
            return userRepository.create(data)
        }
    }
}

module.exports = UsersService