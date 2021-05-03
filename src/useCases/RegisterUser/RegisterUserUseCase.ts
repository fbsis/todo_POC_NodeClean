import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/Users/IUsersRepository";
import { IRegisterUserRequestDTO } from "./RegisterUserDTO";

export class RegisterUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) {

    }

    async execute(data: IRegisterUserRequestDTO) {
        const userExists = await this.userRepository.findByEmail(data.email);

        if (userExists) {
            throw new Error("This user already exists");
        }

        const user = new User(data);

        await this.userRepository.save(user);
    }

}