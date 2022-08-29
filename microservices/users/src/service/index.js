const prisma = require("../libs/db");
const { Prisma } = require("@prisma/client");

class User {
    async getAll() {
        try {
            const users = await prisma.user.findMany();
            console.log(users);
            return {
                success: true,
                users,
            };
        } catch (error) {
            return error;
        }
    }

    async getOneByEmail(email) {
        try {
            const result = prisma.user.findUnique({
                where: {
                    email,
                },
            });
            return {
                success: true,
                result,
            };
        } catch (error) {
            return error;
        }
    }

    async create(data) {
        try {
            const user = await prisma.user.create({ data });
            return {
                success: true,
                user,
            };
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    return {
                        success: false,
                        message:
                            "There is a unique constraint violation, a new user cannot be created with this " +
                            error.meta.target[0],
                    };
                }
            }
        }
    }
}

module.exports = User;
