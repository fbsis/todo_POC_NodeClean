import { Projects } from "../../../entities/Projects";
import { IProjectsRepository } from "../IProjectsRepository";

import MongoProjectsSchema from "./MongoProjectsSchema";


export class MongoProjectsRepository implements IProjectsRepository {

    async viewAll(owner: string): Promise<Projects[]> {
        return await MongoProjectsSchema.find({owner});
    }

    async findById(id: string): Promise<Projects> {
        return await MongoProjectsSchema.findById(id);
    }

    async save(project: Projects): Promise<void> {
        await MongoProjectsSchema.create(project);
    }

    async view(id: string): Promise<Projects> {
        throw new Error("Method not implemented.");
    }

    async remove(project: Projects): Promise<void> {
        await MongoProjectsSchema.deleteOne(project);
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