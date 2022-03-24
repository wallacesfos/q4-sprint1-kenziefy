import { Router } from "express";
import { authenticate, existsUser, validate } from "../middleweres";
import { registerSchema } from "../schemas";
import { createPlaylistController } from "../useCases/CreatePlaylist";
import { createUserController } from "../useCases/CreateUser";
import { deletePlaylistControllers } from "../useCases/DeletePlaylist";
import { getUserController } from "../useCases/GetUsers";
import { loginUserController } from "../useCases/LoginUser";
import { updatePlayListControllers } from "../useCases/UpdatePlaylist";

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
    const {artist, song} = request.query
    if(!artist && !song){
        return createPlaylistController.handle(request, response)
    }else{
        return updatePlayListControllers.handle(request, response)
    }
})

router.delete('/users/playlist', authenticate, (request, response) => {
    return deletePlaylistControllers.handle(request, response)
})


export { router }