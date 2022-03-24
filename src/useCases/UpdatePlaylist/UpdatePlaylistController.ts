import { Request, Response } from "express";
import { config } from "../../config/jwt";
import jwt from "jsonwebtoken";
import { UpdatePlaylistUseCase } from "./UpdatePlaylistUseCase";
import { banco_dados } from "../../db";


export class UpdatePlaylistController{
    constructor(
        public updatePlayListUseCase: UpdatePlaylistUseCase
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

        await this.updatePlayListUseCase.execute(artist, song, user.id)

        const responseUser = banco_dados.map((userItem: any) => {
            if(userItem.id === user.id){
                return {
                    id: userItem.id,
                    username: userItem.username,
                    playlist: userItem.playlist
                }
            }
        })

        return response.status(200).json(responseUser)
    }
}