import { ICreatePlaylistRepositories } from "../../repositories/ICreatePlaylistRepositories";
import { CreatePlaylistDTO } from "./CreatePlaylistDTO";


export class CreatePlaylistUseCase{
    constructor(
        public createPlayListRepository: ICreatePlaylistRepositories
    ){}

    async execute(data: CreatePlaylistDTO, id: string): Promise<void>{
        
        this.createPlayListRepository.save(data, id)
    }
}