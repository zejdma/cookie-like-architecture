import type { IHobby, IHobbyForm } from "../models/hobbyModel";

export interface GetAllHobbiesInterface {
  execute(
    page: number,
    limit: number
  ): Promise<{
    hobbies: IHobby[];
    total: number;
    page: number;
    limit: number;
  }>;
}

export interface GetOneHobbyInterface {
  execute(id: string): Promise<IHobby>;
}

export interface CreateHobbyInterface {
  execute(
    hobby: IHobbyForm
  ): Promise<{ data: IHobby; errors: Record<string, string> }>;
}
