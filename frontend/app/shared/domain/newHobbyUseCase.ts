import type { HobbyRepositoryInterface } from "../repositories/repositoryInterfaces";
import type { CreateHobbyInterface } from "./domainInterfaces";

export function createHobbyUseCase(
  repository: HobbyRepositoryInterface
): CreateHobbyInterface {
  return {
    async execute(hobby) {
      return repository.create(hobby);
    },
  };
}