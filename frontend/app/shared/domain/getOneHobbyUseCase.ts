import type { HobbyRepositoryInterface } from "../repositories/repositoryInterfaces";
import type { GetOneHobbyInterface } from "./domainInterfaces";

export function getOneHobbyUseCase(
  repository: HobbyRepositoryInterface
): GetOneHobbyInterface {
  return {
    async execute(id) {
      return repository.getById(id);
    },
  };
}