import { request, response, Router } from "express";
import { loginUserController } from "./useCases/LoginUser";
import { registerUserController } from "./useCases/RegisterUser";

const router = Router();

router.post('/register', async (request, response) => {
    return await registerUserController.handler(request, response);
})

router.post('/login', async (request, response) => {
    return await loginUserController.handler(request, response);
})

export { router }