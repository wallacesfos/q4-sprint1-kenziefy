import { Request, Response } from "express";
import { banco_dados } from "../../db";
import { CreateUserUseCase } from "./CreateUserUseCase";
import bcrypt from 'bcrypt';


export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;
        
        const hashPassword = await bcrypt.hash(password, 10)

        await this.createUserUseCase.execute({
            username,
            password: hashPassword,
            playlist: {}
        })

        const user = banco_dados[banco_dados.length -1]

        return response.status(201).json({
            id: user.id,
            username: user.username,
            playlist: user.playlist
        })   
    }
}