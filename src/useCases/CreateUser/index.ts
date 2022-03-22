import { BDRepositories } from "../../repositories/implementations/BDCreateUserRepositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const dbRepository = new BDRepositories()

const createUserUseCase = new CreateUserUseCase(
    dbRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }