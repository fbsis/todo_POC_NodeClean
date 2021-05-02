import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { Request, Response } from "express";

export class RegisterUserController {

    constructor(
        private registerUserUseCase: RegisterUserUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const { name, email, password } = request.body;

        try {
            await this.registerUserUseCase.execute({
                name,
                email,
                password
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}