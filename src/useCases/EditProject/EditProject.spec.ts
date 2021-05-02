import { EditProjectUseCase } from "./EditProjectUseCase";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { IEditProjectRequestDTO } from "./EditProjectDTO";
import { Projects } from "../../entities/Projects";

jest.mock('../../repositories/Projects/Implementations/MongoProjectsRepository');

const fakeProject: IEditProjectRequestDTO = { id: "608eb0c01648f31269680d53", name: "name", owner:"0000-0000" };

test('should edit a new project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.findById.mockImplementation(() => Promise.resolve(fakeProject as Projects));
    mockMongo.save.mockImplementation(() => Promise.resolve());
    
    let useCase = new EditProjectUseCase(mockMongo);
    await expect(useCase.execute(fakeProject)).resolves.not.toThrow();
    expect(mockMongo.save).toHaveBeenCalledTimes(1);
})

test('should not edit a unknown project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.findById.mockImplementation(() => Promise.resolve(null as Projects));
    mockMongo.save.mockImplementation(() => Promise.resolve());
    
    let useCase = new EditProjectUseCase(mockMongo);
    await expect(useCase.execute(fakeProject)).rejects.toThrow();
    expect(mockMongo.save).toHaveBeenCalledTimes(0);
})