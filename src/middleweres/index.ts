import { Request, Response, NextFunction} from "express";
import { banco_dados } from "../db";
import jwt from 'jsonwebtoken'
import { config } from "../config/jwt";


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


export const authenticate = (request: Request, response: Response, next: NextFunction) => {
    if (!request.headers.authorization) {
      return response.status(401).json({ message: "invalid token."});
    }
  
    let token = request.headers.authorization.split(" ")[1];
  
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return response.status(401).json({ message: "Invalid Token." });
      } else {
        return next();
      }
    });
};