import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient()

globalForPrisma.prisma = prisma;

export default prisma;
