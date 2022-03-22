import { Router } from "express";
import { existsUser, validate } from "../middleweres";
import { registerSchema } from "../schemas";
import { createUserController } from "../useCases/CreateUser";
import { loginUserController } from "../useCases/LoginUser";

const router = Router();

router.post('/users/register', validate(registerSchema) ,existsUser ,(request, response) => {
    return createUserController.handle(request, response)
})

router.post('/users/login', validate(registerSchema), (request, response) => {
    return loginUserController.handle(request, response)
})

export { router }