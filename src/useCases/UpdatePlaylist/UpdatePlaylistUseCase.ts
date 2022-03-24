import { ICreatePlaylistRepositories } from "../../repositories/ICreatePlaylistRepositories";


export class UpdatePlaylistUseCase{
    constructor(
        public createPlayListRepository: ICreatePlaylistRepositories
    ){}

    async execute(artist: any, song: any, id: string){
        await this.createPlayListRepository.update(artist, song, id)
    }
}