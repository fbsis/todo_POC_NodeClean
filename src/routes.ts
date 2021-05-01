import { request, response, Router } from "express";

const router = Router();

router.post('/register', (request, response) =>{

    return response.status(201).send({'message': 'sucess'});
})

export { router}