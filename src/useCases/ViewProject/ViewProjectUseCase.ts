import { IViewProjectRequestDTO } from "./ViewProjectDTO";
import { IProjectsRepository } from "../../repositories/Projects/IProjectsRepository";
import { Projects } from "../../entities/Projects";

export class ViewProjectUseCase {
    constructor(
        private projectRepository: IProjectsRepository
    ) {

    }

    async execute(data: IViewProjectRequestDTO): Promise<Projects[]> {
        const project = await this.projectRepository.viewAll(data.owner);

        if (project.find(e => e.owner !== data.owner)) {
            throw new Error("This user can not access this register");
        }
        
        return project;
    }

}