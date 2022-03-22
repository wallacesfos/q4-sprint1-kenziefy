import { User } from "../entities/user";

export interface IUsersRepository{
    save(User: User) : Promise<void>;
}