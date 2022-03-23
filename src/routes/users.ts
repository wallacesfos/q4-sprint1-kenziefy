import { Router } from "express";
import { authenticate, existsUser, validate } from "../middleweres";
import { registerSchema } from "../schemas";
import { createPlaylistController } from "../useCases/CreatePlaylist";
import { createUserController } from "../useCases/CreateUser";
import { getUserController } from "../useCases/GetUsers";
import { loginUserController } from "../useCases/LoginUser";

const router = Router();

router.post('/users/register', validate(registerSchema) ,existsUser ,(request, response) => {
    return createUserController.handle(request, response)
})

router.post('/users/login', validate(registerSchema), (request, response) => {
    return loginUserController.handle(request, response)
})

router.get('/users', authenticate, (request, response) => {
    return getUserController.handle(request, response)
})

router.put('/users/playlist', authenticate, (request, response) => {
    return createPlaylistController.handle(request, response)
})

export { router }