import { CreateProjectUseCase } from "./CreateProjectUseCase";
import { Request, Response } from "express";

export class CreateProjectController {

    constructor(
        private createProjectUseCase: CreateProjectUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const { name, owner } = request.body;

        try {
            await this.createProjectUseCase.execute({name, owner});
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}