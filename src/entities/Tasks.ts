import { v4 } from 'uuid';

enum Status {
    todo,
    finished,
  }

export class Tasks {
    
    public readonly id?: string;

    public status: Status;
    public description: string;
    public creatingDate?: Date;
    public completeDate?: Date;

    constructor(props?: Omit<Tasks, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        }
        if (!this.creatingDate) {
            this.creatingDate = new Date();
        }
    }
}