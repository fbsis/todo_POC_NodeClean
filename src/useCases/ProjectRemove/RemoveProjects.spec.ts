import { RemoveProjectUseCase } from "./RemoveProjectsUseCase";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { Projects } from "../../entities/Projects";
import { IRemoveProjectRequestDTO } from "./RemoveProjectsDTO";

jest.mock('../../repositories/Projects/Implementations/MongoProjectsRepository');

const fakeProject: Projects = { id: "608eb0c01648f31269680d53", name: "name", owner: "0000-0000" };
const request: IRemoveProjectRequestDTO = { id: "608eb0c01648f31269680d53" };

test('should remove a project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.findById.mockImplementation(() => Promise.resolve(fakeProject as Projects));
    mockMongo.remove.mockImplementation(() => Promise.resolve());
    mockMongo.save.mockImplementation(() => Promise.resolve());
    
    let useCase = new RemoveProjectUseCase(mockMongo);
    await expect(useCase.execute(request)).resolves.not.toThrow();
    expect(mockMongo.findById).toHaveBeenCalledTimes(1);
    expect(mockMongo.remove).toHaveBeenCalledTimes(1);
    expect(mockMongo.save).toHaveBeenCalledTimes(0);
})

test('should not remove unknown project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.findById.mockImplementation(() => Promise.resolve(null as Projects));
    mockMongo.remove.mockImplementation(() => Promise.resolve());
    mockMongo.save.mockImplementation(() => Promise.resolve());
    
    let useCase = new RemoveProjectUseCase(mockMongo);
    await expect(useCase.execute(request)).rejects.toThrow();
    expect(mockMongo.findById).toHaveBeenCalledTimes(1);
    expect(mockMongo.remove).toHaveBeenCalledTimes(0);
    expect(mockMongo.save).toHaveBeenCalledTimes(0);
})