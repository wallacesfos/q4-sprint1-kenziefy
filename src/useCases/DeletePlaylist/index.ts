import { CreatePlaylistRepositories } from "../../repositories/implementations/CreatePlaylistRepositories";
import { DeletePlayListController } from "./DeletePlaylistController";
import { DeletePlaylistUseCase } from "./DeletePlaylistUseCase";


const createPlaylistRepositories = new CreatePlaylistRepositories()

const deletePlaylistUseCase = new DeletePlaylistUseCase(
    createPlaylistRepositories
)

const deletePlaylistControllers = new DeletePlayListController(
    deletePlaylistUseCase
)


export {deletePlaylistUseCase, deletePlaylistControllers}
