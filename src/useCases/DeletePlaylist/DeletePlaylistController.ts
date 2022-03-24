import { DeletePlaylistUseCase } from "./DeletePlaylistUseCase";
import { Request, Response } from "express";
import { config } from "../../config/jwt";
import jwt from "jsonwebtoken";


export class DeletePlayListController{
    constructor(
        private deletePlayListUseCase : DeletePlaylistUseCase
    ){}
    
    async handle(request: Request, response: Response) : Promise<Response> {
        const { song, artist } = request.query

        const token : string = request.headers.authorization || ''
 

        const token_bearer = token.split(' ')[1]


        const user : any = jwt.verify(token_bearer, config.secret, (err, decoded) => {
            if (err) {
                return response.status(500).send({ auth: false, message: 'Token inválido.' }); 
            }
      
            return decoded
        });

        await this.deletePlayListUseCase.execute(artist, song, user.id)
    

        return response.status(204).json()
    }
}