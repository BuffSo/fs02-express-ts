import { User } from "../types/user";

export interface IUserRepository {
  create(data: Pick<User, 'email' | 'nickname' | 'name'>): Promise<User>
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>
}
