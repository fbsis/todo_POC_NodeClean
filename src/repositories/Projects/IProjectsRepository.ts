import { Projects } from "../../entities/Projects";
import { Tasks } from "../../entities/Tasks";
export interface IProjectsRepository {

  viewAll(owner?: string): Promise<Projects[]>;
  view(id: string, owner?: string): Promise<Projects>;
  findById(id: string, owner?: string): Promise<Projects>;
  save(projects: Projects): Promise<void>;
  remove(projects: Projects): Promise<void>;

  addTask(project: Projects, tasks: Tasks): Promise<void>;
  editTasks(project: Projects, tasks: Tasks): Promise<void>;
  removeTasks(project: Projects, tasks: Tasks): Promise<void>;
  
}