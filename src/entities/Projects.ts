import { v4 } from 'uuid';
import { Tasks } from './Tasks';

export class Projects {
    
    public readonly id?: string;

    public name: string;
    public owner: string;
    public tasks?: object;

    constructor(props?: Omit<Projects, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        }
    }
}