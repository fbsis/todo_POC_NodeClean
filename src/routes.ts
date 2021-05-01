import { request, response, Router } from "express";
import { registerUserController } from "./useCases/RegisterUser";

const router = Router();

router.post('/register', async (request, response) => {
    return await registerUserController.handler(request, response);
})

export { router }