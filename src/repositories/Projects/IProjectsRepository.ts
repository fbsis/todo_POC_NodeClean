import { Projects } from "../../entities/Projects";
export interface IProjectsRepository {

  viewAll(owner?: string): Promise<Projects[]>;
  view(id: string, owner?: string): Promise<Projects>;
  findById(id: string, owner?: string): Promise<Projects>;
  save(projects: Projects): Promise<void>;
  remove(projects: Projects): Promise<void>;

  addTask(projects: Projects): Promise<void>;
  editTasks(projects: Projects): Promise<void>;
  removeTasks(projects: Projects): Promise<void>;
  
}