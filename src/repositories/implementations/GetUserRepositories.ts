import { banco_dados } from "../../db";
import { IGetUserRepository } from "../IGetUserRepository";


export class GetUserRepositories implements IGetUserRepository{

    async findUsers(): Promise<any[]>{
        return banco_dados
    }
}