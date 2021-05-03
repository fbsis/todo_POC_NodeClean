import { User } from "../../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import MongoUserSchema from "./MongoUserSchema";


export class MongoUsersRepository implements IUsersRepository {

    async findByEmail(email: string): Promise<User> {
        return await MongoUserSchema.findOne({ email: email });
    }

    async save(user: User): Promise<void> {
        await MongoUserSchema.create(user);
    }
}