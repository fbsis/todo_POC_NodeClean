import { MongoUsersRepository } from "../../repositories/Users/implementations/MongoUserRepository";
import { Base64Token } from "../../shared/Base64Token";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const mongoUsersRepository = new MongoUsersRepository();

const loginUserUseCase = new LoginUserUseCase(
    mongoUsersRepository,
    new Base64Token
  )
  
  const loginUserController = new LoginUserController(
    loginUserUseCase
  )

  export { loginUserUseCase, loginUserController }
