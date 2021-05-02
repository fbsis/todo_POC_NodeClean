import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { TaskProjectController } from "./TaskProjectController";

import { TaskProjectUserUseCase } from "./TaskProjectUseCase"

const mongoProjectsRepository = new MongoProjectsRepository();

const taskProjectUseCase = new TaskProjectUserUseCase(
  mongoProjectsRepository
)

const taskProjectController = new TaskProjectController(
  taskProjectUseCase
)

export { taskProjectUseCase, taskProjectController }
