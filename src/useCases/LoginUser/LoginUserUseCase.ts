import { IUsersLoginRepository } from "../../repositories/IUserLoginRepository";
import { ILoginUserRequestDTO } from "./LoginUserDTO";


export class LoginUserUseCase{
    constructor(
        private userLoginRepository: IUsersLoginRepository
    ){}

    async execute(data: ILoginUserRequestDTO){
        
       const user = await this.userLoginRepository.login(data.username, data.password);

       return user
    }
}