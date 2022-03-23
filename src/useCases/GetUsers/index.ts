import { GetUserRepositories } from "../../repositories/implementations/GetUserRepositories";
import { GetUserController } from "./GetUserController";


const getUserRepositories = new GetUserRepositories()

const getUserController = new GetUserController(
    getUserRepositories
)


export { getUserController, getUserRepositories }