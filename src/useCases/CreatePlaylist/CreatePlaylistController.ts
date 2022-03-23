import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../config/jwt";
import { banco_dados } from "../../db";
import { CreatePlaylistUseCase } from "./CreatePlaylistUseCase";


export class CreatePlayListController{

    constructor(
        public createPlayListUseCase: CreatePlaylistUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
    
        const token : string = request.headers.authorization || ''
 

        const token_bearer = token.split(' ')[1]


        const user : any = jwt.verify(token_bearer, config.secret, (err, decoded) => {
            if (err) {
                return response.status(500).send({ auth: false, message: 'Token inválido.' }); 
            }
      
            return decoded
        });
        
        this.createPlayListUseCase.execute(request.body, user.id)

        const result = banco_dados.filter((item: any) => item.id === user.id)

        return response.status(200).json(result[0])
    }
}