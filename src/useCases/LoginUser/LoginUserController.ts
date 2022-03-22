import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from "../../config/jwt";

export class LoginUserController{
    
    constructor(
        private loginUserUseCase: LoginUserUseCase
    ){}
    
    async handle(request: Request, response: Response) : Promise<Response> {
        const {username, password} = request.body;
        
        const user = await this.loginUserUseCase.execute({username, password});
        
        if(user === undefined) {
            return response.status(404).json({ message: "User Not Found" })
        }
        
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return response.status(401).json({ message: "Wrong credentials. Try again!" });
        }

        const token = jwt.sign({
            id: user.id,
            username: user.username
        }, config.secret, {
            expiresIn: config.expiresIn,
        });

        return response.status(200).json({acess_token: token});
    }
}   