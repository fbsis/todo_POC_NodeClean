import { IProjectsRepository } from "../../repositories/Projects/IProjectsRepository";
import { IRemoveProjectRequestDTO } from "./RemoveProjectsDTO";

export class RemoveProjectUseCase {
    constructor(
        private projectRepository: IProjectsRepository
    ) {

    }

    async execute(data: IRemoveProjectRequestDTO) {
        const project = await this.projectRepository.findById(data.id);

        if (!project) {
            throw new Error("This projects do not exists");
        }

        await this.projectRepository.remove(project);
    }

}