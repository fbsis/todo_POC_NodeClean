import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { EditProjectController } from "./EditProjectController";
import { EditProjectUseCase } from "./EditProjectUseCase"

const mongoProjectsRepository = new MongoProjectsRepository();

const editProjectUseCase = new EditProjectUseCase(
  mongoProjectsRepository
)

const editProjectController = new EditProjectController(
  editProjectUseCase
)

export { editProjectUseCase, editProjectController }
