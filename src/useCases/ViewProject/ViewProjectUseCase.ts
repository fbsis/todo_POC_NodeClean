import { IViewProjectRequestDTO } from "./ViewProjectDTO";
import { IProjectsRepository } from "../../repositories/Projects/IProjectsRepository";
import { Projects } from "../../entities/Projects";

export class ViewProjectUseCase {
    constructor(
        private projectRepository: IProjectsRepository
    ) {

    }

    async execute(data: IViewProjectRequestDTO) : Promise<Projects> {
        const project = await this.projectRepository.viewAll(data.owner);

        return project;
    }

}