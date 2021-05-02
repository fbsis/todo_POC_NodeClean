import { Projects } from "../../entities/Projects";
import { CreateProjectUseCase } from "./CreateProjectUseCase";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";

jest.mock('../../repositories/Users/implementations/MongoUserRepository');

const fakeProject: Projects = { name: "name", owner:"0000-0000" };

test('should create a new project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.save.mockImplementation(() => Promise.resolve());

    let useCase = new CreateProjectUseCase(mockMongo);
    await expect(useCase.execute(fakeProject)).resolves.not.toThrow();
    expect(mockMongo.save).toHaveBeenCalledTimes(1);
})

