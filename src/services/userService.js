const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class User {

    constructor() {}

    async getOneByEmail(email) {
        try {
            const result = prisma.user.findUnique({ where: {email} });
            
            return result
        } catch (error) {
            return error
        }
    }

    async create(data) {
        try {
            const user = await prisma.user.create({ data })

            return {
                success: true,
                user
            }
        } catch (error) {
            return error
        }
    }
}

module.exports = User