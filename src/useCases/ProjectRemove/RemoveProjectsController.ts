import { RemoveProjectUseCase } from "./RemoveProjectsUseCase";
import { Request, Response } from "express";

export class RemoveProjectController {

    constructor(
        private useCase: RemoveProjectUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        try {
            await this.useCase.execute({
               id
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}