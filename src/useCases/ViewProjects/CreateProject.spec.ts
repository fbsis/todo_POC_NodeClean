import { Projects } from "../../entities/Projects";
import { CreateProjectUseCase } from "./CreateProjectUseCase";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";

jest.mock('../../repositories/Projects/Implementations/MongoProjectsRepository');

const fakeProject: Projects = { name: "name", owner:"0000-0000" };

test('should register a new Project on model', () => {
    let project = new Projects();
    project.name = "new project"
    project.owner = "0000-0000"

    expect(project.id).not.toBeNull();
    expect(project.name).toEqual("new project")
    expect(project.owner).toEqual("0000-0000")
})

test('should create a new project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.save.mockImplementation(() => Promise.resolve());

    let useCase = new CreateProjectUseCase(mockMongo);
    await expect(useCase.execute(fakeProject)).resolves.not.toThrow();
    expect(mockMongo.save).toHaveBeenCalledTimes(1);
})


