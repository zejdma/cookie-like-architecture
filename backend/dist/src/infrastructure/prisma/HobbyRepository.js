import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class PrismaHobbyRepository {
    async findAll({ skip, take }) {
        return await prisma.hobby.findMany({ skip, take });
    }
}
