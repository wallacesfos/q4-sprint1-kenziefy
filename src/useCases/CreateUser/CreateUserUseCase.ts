import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(data: ICreateUserRequestDTO) {
        
        const user = new User(data);


        await this.usersRepository.save(user);
    }
}