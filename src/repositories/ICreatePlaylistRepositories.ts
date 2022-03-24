
export interface ICreatePlaylistRepositories{
    save(playlist: any, id: string): Promise<void>
    delete(artist: string, song: string, id: string): Promise<void>
    update(artist: string, song: string, id: string): Promise<void>
    findUsers() : Promise<any[]>

}