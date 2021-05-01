import { MongoUsersRepository } from "../../repositories/Users/implementations/MongoUserRepository"
import { RegisterUserController } from "./RegisterUserController";
import { RegisterUserUseCase } from "./RegisterUserUseCase"

const mongoUsersRepository = new MongoUsersRepository();

const registerUserUseCase = new RegisterUserUseCase(
    mongoUsersRepository
  )
  
  const registerUserController = new RegisterUserController(
    registerUserUseCase
  )

  export { registerUserUseCase, registerUserController }
