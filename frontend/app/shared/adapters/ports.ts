import type { IHobby, IHobbyForm } from "../models/hobbyModel";

export interface HobbyStorageService {
  getAll(
    page: number,
    limit: number
  ): Promise<{
    hobbies: IHobby[];
    total: number;
    page: number;
    limit: number;
  }>;
  getById(id: string): Promise<IHobby>;
  create(
    hobby: IHobbyForm
  ): Promise<{ data: IHobby; errors: Record<string, string> }>;
}
