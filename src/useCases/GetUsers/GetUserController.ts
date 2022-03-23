import { Request, Response } from "express";
import { IGetUserRepository } from "../../repositories/IGetUserRepository";


export class GetUserController{

    constructor(
        private getUserRepositories: IGetUserRepository
    ){}
    
    async handle(request: Request, response: Response) : Promise<Response> {
        const users = await this.getUserRepositories.findUsers();

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