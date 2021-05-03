import { TaskProjectUserUseCase } from "./TaskProjectUseCase";
import { Request, Response } from "express";
import { Projects } from "../../entities/Projects";

export class TaskProjectController {

    constructor(
        private useCase: TaskProjectUserUseCase
    ) {

    }

    async Create(request: Request, response: Response): Promise<Response> {

        const task = request.body;
        const { id } = request.params;
        const owner = "608dd0ea59943047a9016e1c";

        try {
            await this.useCase.create(
                { id, owner } as Projects,
                task
            );
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    async edit(request: Request, response: Response): Promise<Response> {

        const task = request.body;
        const { id } = request.params;
        const owner = "608dd0ea59943047a9016e1c";

        try {
            await this.useCase.edit(
                { id, owner } as Projects,
                task
            );
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }


    async remove(request: Request, response: Response): Promise<Response> {

        const task = request.body;
        const { id } = request.params;
        const owner = "608dd0ea59943047a9016e1c";

        try {
            await this.useCase.remove(
                { id, owner } as Projects,
                task
            );
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}