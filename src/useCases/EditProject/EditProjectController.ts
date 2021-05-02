import { EditProjectUseCase } from "./EditProjectUseCase";
import { Request, Response } from "express";

export class EditProjectController {

    constructor(
        private useCase: EditProjectUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const { name } = request.body;
        const { id } = request.params;
        const owner = "608dd0ea59943047a9016e1c";

        try {
            await this.useCase.execute({
                id,
                name,
                owner
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}