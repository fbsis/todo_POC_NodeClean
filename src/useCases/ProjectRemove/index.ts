import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { RemoveProjectController } from "./RemoveProjectsController";
import { RemoveProjectUseCase } from "./RemoveProjectsUseCase"

const mongoProjectsRepository = new MongoProjectsRepository();

const removeProjectUseCase = new RemoveProjectUseCase(
  mongoProjectsRepository
)

const removeProjectController = new RemoveProjectController(
  removeProjectUseCase
)

export { removeProjectUseCase, removeProjectController }
