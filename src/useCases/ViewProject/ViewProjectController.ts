import { ViewProjectUseCase } from "./ViewProjectUseCase";
import { Request, Response } from "express";

export class ViewProjectController {

    constructor(
        private useCase: ViewProjectUseCase
    ) {

    }
    async handler(request: Request, response: Response): Promise<Response> {

        const owner = "608dd0ea59943047a9016e1c";

        try {
            let project = await this.useCase.execute({
                owner
            });
            return response.send({data: project});
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}