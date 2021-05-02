import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { ViewProjectController } from "./ViewProjectController";
import { ViewProjectUseCase } from "./ViewProjectUseCase"

const mongoProjectRepository = new MongoProjectsRepository();

const viewProjectUseCase = new ViewProjectUseCase(
  mongoProjectRepository
  )
  
  const viewProjectController = new ViewProjectController(
    viewProjectUseCase
  )

  export { viewProjectUseCase, viewProjectController }
