import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/Users/IUsersRepository";
import { ILoginUserRequestDTO } from "./LoginUserDTO";
import { Base64Token } from "../../shared/Base64Token";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private token: Base64Token
    ) {

    }

    async execute(data: ILoginUserRequestDTO) {
        const { email, password } = data;

        const user = await this.userRepository.findByEmail(email);
        
        if (!user) {
            throw new Error("The password is wrong, or this user dont exists on our database");
        }

        if(user.password !== password){
            throw new Error("The password is wrong");
        }

        const userToken = this.token.encode({id: user.id, expiration: new Date()});

        return userToken;

    }

}