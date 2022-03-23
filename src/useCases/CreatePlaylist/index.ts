import { CreatePlaylistRepositories } from "../../repositories/implementations/CreatePlaylistRepositories";
import { CreatePlayListController } from "./CreatePlaylistController";
import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase";



const createPlaylistRepositories = new CreatePlaylistRepositories()

const createPlaylistUseCase = new CreatePlaylistUseCase(
    createPlaylistRepositories
)

const createPlaylistController = new CreatePlayListController(
    createPlaylistUseCase
)

export { createPlaylistController, createPlaylistUseCase }