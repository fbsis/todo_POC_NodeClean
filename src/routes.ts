import { Request, Response, Router } from "express";
import { createProjectController } from "./useCases/CreateProjects";
import { editProjectController } from "./useCases/EditProject/";
import { loginUserController } from "./useCases/LoginUser";
import { registerUserController } from "./useCases/RegisterUser";

const router = Router();

router.post('/register', async (request: Request, response: Response) => {
    return await registerUserController.handler(request, response);
})

router.post('/login', async (request: Request, response: Response) => {
    return await loginUserController.handler(request, response);
})

router.post('/project', async (request: Request, response: Response) => {
    return await createProjectController.handler(request, response);
})

router.patch('/project/:id', async (request: Request, response: Response) => {
    return await editProjectController.handler(request, response);
})

export { router }