import { ICreatePlaylistRepositories } from "../../repositories/ICreatePlaylistRepositories";


export class DeletePlaylistUseCase{

    constructor(
        public createPlayListRepository: ICreatePlaylistRepositories
    ){}

    async execute(artist: any, song: any, id: string){
        await this.createPlayListRepository.delete(artist, song, id)
    }
}