import { LoginUserUseCase } from "./LoginUserUseCase";
import { Request, Response } from "express";

export class LoginUserController {

    constructor(
        private loginUserUseCase: LoginUserUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        try {
            const token = await this.loginUserUseCase.execute({
                email,
                password
            });
            return response.status(200).send({ token });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}