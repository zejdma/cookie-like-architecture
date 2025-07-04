import { PrismaHobbyRepository } from '../infrastructure/prisma/HobbyRepository.ts';
import { GetAllHobbiesUseCase } from '../application/hobby/GetAllHobbiesUseCase.ts';

const hobbyRepository = new PrismaHobbyRepository();
export const getAllHobbiesUseCase = new GetAllHobbiesUseCase(hobbyRepository);
