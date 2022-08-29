const prisma = require("../libs/db");

class User {
    async getAll() {
        try {
            const users = await prisma.user.findMany()
            console.log(users);
            return {
                success: true,
                users
            }
        } catch (error) {
            return error
        }
    }

    async getOneByEmail(email) {
        try {
            const result = prisma.user.findUnique({
                where: {
                    email
                }
            });
            return {
                success: true,
                result
            }
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
            return {
                success: false,
                error: error.message
            }
        }
    }
}

module.exports = User