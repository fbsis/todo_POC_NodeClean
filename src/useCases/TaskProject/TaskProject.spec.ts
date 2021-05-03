import { Projects } from "../../entities/Projects";
import { TaskProjectUserUseCase } from "./TaskProjectUseCase";
import { MongoProjectsRepository } from "../../repositories/Projects/Implementations/MongoProjectsRepository";
import { Tasks } from "../../entities/Tasks";

jest.mock('../../repositories/Projects/Implementations/MongoProjectsRepository');

const fakeProject: Projects = { id: "123456", name: "name", owner: "0000-0000", tasks: [] };
enum Status {
    todo,
    finished,
}

const tasks: Tasks = {
    "id": "608f0b59ef90e25a940adf73",
    "status": Status.todo,
    "description": "description"
};

test('should create a new task for a project', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.addTask.mockImplementation(() => Promise.resolve());

    let useCase = new TaskProjectUserUseCase(mockMongo);
    await expect(useCase.create(fakeProject, tasks)).resolves.not.toThrow();
    expect(mockMongo.addTask).toHaveBeenCalledTimes(1);
})

test('should reject on create task with error', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.addTask.mockImplementation(() => Promise.reject());

    let useCase = new TaskProjectUserUseCase(mockMongo);
    await expect(useCase.create(fakeProject, tasks)).rejects.not.toThrow();
    expect(mockMongo.addTask).toHaveBeenCalledTimes(1);
})

test('should change a task', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.editTasks.mockImplementation(() => Promise.resolve());

    let useCase = new TaskProjectUserUseCase(mockMongo);
    await expect(useCase.edit(fakeProject, tasks)).resolves.not.toThrow();
    expect(mockMongo.editTasks).toHaveBeenCalledTimes(1);
})

test('should reject on change task with error', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.editTasks.mockImplementation(() => Promise.reject());

    let useCase = new TaskProjectUserUseCase(mockMongo);
    await expect(useCase.edit(fakeProject, tasks)).rejects.not.toThrow();
    expect(mockMongo.editTasks).toHaveBeenCalledTimes(1);
})

test('should remove a task', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.removeTasks.mockImplementation(() => Promise.resolve());

    let useCase = new TaskProjectUserUseCase(mockMongo);
    await expect(useCase.remove(fakeProject, tasks)).resolves.not.toThrow();
    expect(mockMongo.removeTasks).toHaveBeenCalledTimes(1);
})

test('should reject on remove task with error', async () => {
    const mockMongo: jest.Mocked<MongoProjectsRepository> = new MongoProjectsRepository() as any;
    mockMongo.removeTasks.mockImplementation(() => Promise.reject());

    let useCase = new TaskProjectUserUseCase(mockMongo);
    await expect(useCase.remove(fakeProject, tasks)).rejects.not.toThrow();
    expect(mockMongo.removeTasks).toHaveBeenCalledTimes(1);
})