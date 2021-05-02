import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase"

const mongoUsersRepository = new MongoProjectsRepository();

const createProjectUseCase = new CreateProjectUseCase(
  mongoUsersRepository
)

const createProjectController = new CreateProjectController(
  createProjectUseCase
)

export { createProjectUseCase, createProjectController }