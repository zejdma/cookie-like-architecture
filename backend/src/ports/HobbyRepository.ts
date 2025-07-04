import { Hobby } from '../domain/hobby';

export interface IHobbyRepository {
  findAll(params: { skip: number; take: number}): Promise<Hobby[]>;
  findTotal(): Promise<number>;
}