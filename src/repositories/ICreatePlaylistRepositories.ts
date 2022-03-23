
export interface ICreatePlaylistRepositories{
    save(playlist: any, id: string): Promise<void>
}