import { banco_dados } from "../../db";
import { IUsersLoginRepository } from "../IUserLoginRepository";

export class UserLoginRepository implements IUsersLoginRepository{

    async login(username: string, password: string): Promise<any>{
        const user = banco_dados.filter((item:any) => username === item.username);

        return user[0]
    }
}