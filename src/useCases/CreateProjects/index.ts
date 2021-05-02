import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase"

const mongoProjectRepository = new MongoProjectsRepository();

const createProjectUseCase = new CreateProjectUseCase(
  mongoProjectRepository
)

const createProjectController = new CreateProjectController(
  createProjectUseCase
)

export { createProjectUseCase, createProjectController }