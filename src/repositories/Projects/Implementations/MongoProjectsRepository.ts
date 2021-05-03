import { Projects } from "../../../entities/Projects";
import { Tasks } from "../../../entities/Tasks";
import { IProjectsRepository } from "../IProjectsRepository";

import MongoProjectsSchema from "./MongoProjectsSchema";


export class MongoProjectsRepository implements IProjectsRepository {

    async viewAll(owner: string): Promise<Projects[]> {
        return await MongoProjectsSchema.find({ owner });
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

    async addTask(project: Projects, task: Tasks): Promise<void> {
        await MongoProjectsSchema.updateOne(
            {
                _id: project.id,
                owner: project.owner
            },
            { $push: { tasks: task } }
        );
    }

    async editTasks(project: Projects, task: Tasks): Promise<void> {
        await MongoProjectsSchema.updateOne(
            {
                _id: project.id,
                owner: project.owner,
                'tasks._id': task.id
            },
            {
                $set: {
                    "tasks.$.description": "asdf",
                    "tasks.$.status": task?.status,
                    "tasks.$.completeDate": task.completeDate ? task.completeDate : null
                }
            }
        );
    }

    async removeTasks(project: Projects, task: Tasks): Promise<void> {
        await MongoProjectsSchema.updateOne(
            {
                _id: project.id,
                owner: project.owner,
                'tasks._id': task.id
            },
            {
                $pull: {
                    tasks: { _id: task.id }
                }
            }
        );
    }
}