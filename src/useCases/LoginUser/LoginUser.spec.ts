import { User } from "../../entities/User";

import { MongoUsersRepository } from "../../repositories/Users/implementations/MongoUserRepository";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { Base64Token } from "../../shared/Base64Token";

jest.mock('../../repositories/Users/implementations/MongoUserRepository');

let fakeUser = { name: "name", email: 'teste@teste.com', password: '123456789' };

test('should make a login with a corret login', async () => {
    const mockMongoUser: jest.Mocked<MongoUsersRepository> = new MongoUsersRepository() as any;
    mockMongoUser.findByEmail.mockImplementation(() => Promise.resolve(fakeUser as User));

    let loginCase = new LoginUserUseCase(
        mockMongoUser,
        new Base64Token
    );

    await expect(loginCase.execute(fakeUser)).resolves.not.toThrow();

    expect(mockMongoUser.findByEmail).toHaveBeenCalledTimes(1);
})

test('should not make a login with a wrong password', async () => {
    const mockMongoUser: jest.Mocked<MongoUsersRepository> = new MongoUsersRepository() as any;
    mockMongoUser.findByEmail.mockImplementation(() => Promise.resolve(fakeUser as User));

    let loginCase = new LoginUserUseCase(
        mockMongoUser,
        new Base64Token
    );
    
    await expect(loginCase.execute({...fakeUser, password: 'wrong'})).rejects.toThrow();

    expect(mockMongoUser.findByEmail).toHaveBeenCalledTimes(1);
})

test('Should not accept a unregistered email', async () => {
    const mockMongoUser: jest.Mocked<MongoUsersRepository> = new MongoUsersRepository() as any;
    mockMongoUser.findByEmail.mockImplementation(() => Promise.resolve(null as User));

    let loginCase = new LoginUserUseCase(
        mockMongoUser,
        new Base64Token
    );
    
    await expect(loginCase.execute({...fakeUser, email: 'donotexists@email.com'})).rejects.toThrow();

    expect(mockMongoUser.findByEmail).toHaveBeenCalledTimes(1);
})