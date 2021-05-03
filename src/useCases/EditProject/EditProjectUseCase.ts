import { Projects } from "../../entities/Projects";
import { IProjectsRepository } from "../../repositories/Projects/IProjectsRepository";
import { IEditProjectRequestDTO } from "./EditProjectDTO";

export class EditProjectUseCase {
    constructor(
        private projectsRepository: IProjectsRepository
    ) {

    }

    async execute(data: IEditProjectRequestDTO) {
        const project = await this.projectsRepository.findById(data.id);

        if (!project) {
            throw new Error("This projects do not exists");
        }
        project.name = data.name;
        project.owner = project.owner;

        await this.projectsRepository.save(project);
    }

}