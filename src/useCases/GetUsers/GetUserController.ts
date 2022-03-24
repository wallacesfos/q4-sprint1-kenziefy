import { Request, Response } from "express";
import { ICreatePlaylistRepositories } from "../../repositories/ICreatePlaylistRepositories";


export class GetUserController{

    constructor(
        private createPlaylistRepositories: ICreatePlaylistRepositories
    ){}
    
    async handle(request: Request, response: Response) : Promise<Response> {
        const users = await this.createPlaylistRepositories.findUsers()

        let arr: { id: string; username: string; playlist: any; }[] = []

        users.map(user => {
            arr.push({
                id: user.id,
                username: user.username,
                playlist: user.playlist
            })
        })
        
        return response.status(200).json(arr)
    }
}