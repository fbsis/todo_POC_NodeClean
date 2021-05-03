import { Projects } from "../../entities/Projects";
import { ViewProjectUseCase } from "./ViewProjectUseCase";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";

jest.mock('../../repositories/Projects/Implementations/MongoProjectsRepository');

const fakeProject: Projects = { name: "name", owner: "0000-0000" };
const fakeProjectAnotherUser = { owner: "1000-0000" };

test('should create a new project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.viewAll.mockImplementation(() => Promise.resolve([fakeProject] as Projects[]));

    let useCase = new ViewProjectUseCase(mockMongo);
    await expect(useCase.execute(fakeProject)).resolves.not.toThrow();
    expect(mockMongo.viewAll).toHaveBeenCalledTimes(1);
})

test('should not see project from another users', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.viewAll.mockImplementation(() => Promise.resolve([fakeProject] as Projects[]));

    let useCase = new ViewProjectUseCase(mockMongo);
    await expect(useCase.execute(fakeProjectAnotherUser)).rejects.toThrow();
    expect(mockMongo.viewAll).toHaveBeenCalledTimes(1);
})
