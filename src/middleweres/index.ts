import { Request, Response, NextFunction} from "express";
import { banco_dados } from "../db";


export const existsUser = (request : Request, response : Response, next: NextFunction) => {
    const { username } = request.body;

    const user = banco_dados.filter((item: any) => item.username === username)
    
    if(user[0] !== undefined) {
        return response.status(422).json({"message": "You can not use this username."})
    }
    next()
}

export const validate = (schema: any) => async (request : Request, response : Response, next: NextFunction) => {
    const resource = request.body;

    try{
        await schema.validate(resource);
        next();

    }catch (e: any) {
        response.status(400).json({ error: e.errors.join(", ") });
    }
}