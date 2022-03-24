import { CreatePlaylistRepositories } from "../../repositories/implementations/CreatePlaylistRepositories";
import { UpdatePlaylistController } from "./UpdatePlaylistController";
import { UpdatePlaylistUseCase } from "./UpdatePlaylistUseCase";


const createPlaylistRepositories = new CreatePlaylistRepositories()

const updatePlaylistUseCase = new UpdatePlaylistUseCase(
    createPlaylistRepositories
)

const updatePlayListControllers = new UpdatePlaylistController(
    updatePlaylistUseCase
)


export {updatePlayListControllers, updatePlaylistUseCase}