
import { hobbyRepository } from "../repositories/hobbyRepository";
import { getAllHobbiesUseCase } from "./getAllHobbiesUseCase";
import { getOneHobbyUseCase } from "./getOneHobbyUseCase";
import { createHobbyUseCase } from "./newHobbyUseCase";

export const useCases = {
  createHobby: createHobbyUseCase(hobbyRepository()),
  getAllHobbies: getAllHobbiesUseCase(hobbyRepository()),
  getOneHobby: getOneHobbyUseCase(hobbyRepository()),
};
