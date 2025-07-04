
import { IHobbyRepository } from '../../ports/HobbyRepository.ts';

export class GetAllHobbiesUseCase {
  constructor(private hobbyRepository: IHobbyRepository) {}

  async execute({ page = 1, limit = 10 }) {
    const skip = (page - 1) * limit;
    const hobbies =  await this.hobbyRepository.findAll({ skip, take: limit });
    const total =  await this.hobbyRepository.findTotal();
    return {hobbies, total}
  }
}