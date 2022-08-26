const { PrismaClient } = require("@prisma/client")
const { production } = require("../../config")

let prisma

if (production) {
  prisma = new PrismaClient()
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient()
  }
  prisma = globalThis.prisma
}

module.exports = prisma