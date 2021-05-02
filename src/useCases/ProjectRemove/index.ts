import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { RemoveProjectController } from "./RemoveProjectsController";
import { RemoveProjectUseCase } from "./RemoveProjectsUseCase"

const mongoProjectsRepository = new MongoProjectsRepository();

const registerUserUseCase = new RemoveProjectUseCase(
  mongoProjectsRepository
)

const registerUserController = new RemoveProjectController(
  registerUserUseCase
)

export { registerUserUseCase, registerUserController }
