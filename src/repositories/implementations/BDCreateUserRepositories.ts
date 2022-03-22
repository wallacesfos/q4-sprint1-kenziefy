import { User } from "../../entities/user";
import { banco_dados } from "../../db";
import { IUsersRepository } from "../IUsersRepository";

export class BDRepositories implements IUsersRepository {

    async save( user: User ) : Promise<void> {
        banco_dados.push(user);
    }
}