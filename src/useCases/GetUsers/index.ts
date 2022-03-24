import { CreatePlaylistRepositories } from "../../repositories/implementations/CreatePlaylistRepositories";
import { GetUserController } from "./GetUserController";


const createPlaylistRepositories = new CreatePlaylistRepositories()

const getUserController = new GetUserController(
    createPlaylistRepositories
)


export { getUserController, createPlaylistRepositories }