// const { PrismaClient } = require('@prisma/client')
// const client = new PrismaClient()

class UsersRepository {
    constructor(db) {
        this.db = db
    }

    create(data) {
        return this.db.create(data)
    }
}

module.exports = UsersRepository