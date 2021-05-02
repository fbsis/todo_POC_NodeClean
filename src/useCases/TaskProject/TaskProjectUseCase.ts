import { Projects } from "../../entities/Projects";
import { Tasks } from "../../entities/Tasks";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { ITaskProjectRequestDTO } from "./TaskProjectDTO";

export class TaskProjectUserUseCase {
    constructor(
        private repository: MongoProjectsRepository
    ) {

    }

    async create(project: Projects, data: ITaskProjectRequestDTO) {
        await this.repository.addTask(project, data);
    }

    async edit(project: Projects,data: ITaskProjectRequestDTO) {
        await this.repository.editTasks(project, data);

    }

    async remove(project: Projects,data: ITaskProjectRequestDTO) {
        await this.repository.removeTasks(project, data);
    }

}