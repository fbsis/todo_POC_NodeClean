import { User } from "../../entities/User";
import { ViewProjectUseCase } from "./ViewProjectUseCase";
import { MongoUsersRepository } from "../../repositories/Users/implementations/MongoUserRepository";

jest.mock('../../repositories/Users/implementations/MongoUserRepository');

const fakeUser = { name: "name", email: 'tteste@teste.com', password: '123456789' };

test('It should by ok', () => {
    expect(1).toEqual(1)
})

test('should register a new user on model', () => {
    let user = new User();
    user.name = "teste1"
    user.email = "email@email.com"
    user.password = "password"

    expect(user.id).not.toBeNull();
    expect(user.name).toEqual(user.name)
    expect(user.email).toEqual(user.email)
    expect(user.password).toEqual(user.password)
})

test('should reject register if email already exists on register', async () => {

    const mockMongoUser: jest.Mocked<MongoUsersRepository> = new MongoUsersRepository() as any;
    mockMongoUser.findByEmail.mockImplementation(() => Promise.resolve(fakeUser as User));
    mockMongoUser.save.mockImplementation(() => Promise.resolve());

    let registerCase = new ViewProjectUseCase(mockMongoUser);

    await expect(registerCase.execute(fakeUser)).rejects.toThrow();

    expect(mockMongoUser.save).toHaveBeenCalledTimes(0);

})

test('should accept register if email not exists on register', async () => {

    const mockMongoUser: jest.Mocked<MongoUsersRepository> = new MongoUsersRepository() as any;
    mockMongoUser.findByEmail.mockImplementation(() => Promise.resolve(null as User));
    mockMongoUser.save.mockImplementation(() => Promise.resolve());

    let registerCase = new ViewProjectUseCase(mockMongoUser);
    await expect(registerCase.execute(fakeUser)).resolves.not.toThrow();
    expect(mockMongoUser.save).toHaveBeenCalledTimes(1);
})



