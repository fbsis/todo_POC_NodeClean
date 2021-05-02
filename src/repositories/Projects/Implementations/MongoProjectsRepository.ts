import { Projects } from "../../../entities/Projects";
import { IProjectsRepository } from "../IProjectsRepository";

import MongoProjectsSchema from "./MongoProjectsSchema";


export class MongoProjectsRepository implements IProjectsRepository {
    async findById(id: string): Promise<Projects> {
        return await MongoProjectsSchema.findById(id);
    }

    async save(user: Projects): Promise<void> {
        await MongoProjectsSchema.create(user);
    }

    async view(id: string): Promise<Projects> {
        throw new Error("Method not implemented.");
    }

    async remove(user: Projects): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async addTask(projects: Projects): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async editTasks(projects: Projects): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async removeTasks(projects: Projects): Promise<void> {
        throw new Error("Method not implemented.");
    }
}