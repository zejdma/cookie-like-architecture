import { PrismaClient } from '@prisma/client';
import { IHobbyRepository } from '../../ports/HobbyRepository.ts';

const prisma = new PrismaClient();

export class PrismaHobbyRepository implements IHobbyRepository {
  async findAll({ skip, take }: {skip: number, take: number}) {
    return await prisma.hobby.findMany({ skip, take });
  }
  async findTotal() {
    return (await prisma.hobby.findMany()).length;
  }
}