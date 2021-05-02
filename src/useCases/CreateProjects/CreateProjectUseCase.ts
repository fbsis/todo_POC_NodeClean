import { Projects } from "../../entities/Projects";
import { IProjectsRepository } from "../../repositories/Projects/IProjectsRepository";
import { ICreateProjectRequestDTO } from "./CreateProjectDTO";

export class CreateProjectUseCase {
    constructor(
        private projectRepository: IProjectsRepository
    ) {

    }

    async execute(data: ICreateProjectRequestDTO) {
        const user = new Projects(data);
        
        await this.projectRepository.save(user);
    }

}