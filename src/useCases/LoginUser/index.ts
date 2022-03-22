import { UserLoginRepository } from "../../repositories/implementations/UserLoginRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";


const userLoginRepository = new UserLoginRepository()

const loginUserUseCase = new LoginUserUseCase(
    userLoginRepository
)

const loginUserController = new LoginUserController(
    loginUserUseCase
)

export { loginUserUseCase, loginUserController }