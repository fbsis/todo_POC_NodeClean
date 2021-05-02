import { CreateProjectUseCase } from "./CreateProjectUseCase";
import { Request, Response } from "express";

export class CreateProjectController {

    constructor(
        private createProjectUseCase: CreateProjectUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const { name } = request.body;
        const owner = "608dd0ea59943047a9016e1d";

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