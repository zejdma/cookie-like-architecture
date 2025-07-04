import type { IHobby, IHobbyForm } from "../models/hobbyModel";
import type { HobbyRepositoryInterface } from "../repositories/repositoryInterfaces";
import type { GetAllHobbiesInterface } from "./domainInterfaces";

export function getAllHobbiesUseCase(
  repository: HobbyRepositoryInterface
): GetAllHobbiesInterface {
  return {
    async execute(page, limit) {
      return repository.getAll(page, limit);
    },
  };
}
