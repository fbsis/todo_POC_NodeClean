import { Schema, model, Document } from "mongoose";

interface TasksDoc extends Document {
  id: string,
  status: string,
  description: string;
  creatingDate: Date;
  completeDate: Date;
}

interface ProjectsDoc extends Document {
  id: string,
  name: string;
  owner: string;
  tasks: TasksDoc[]
}

const tasks = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  description: { type: String, required: true, trim: true },
  status: { type: String, required: true, trim: true },
  creatingDate: { type: Date, required: true, default: Date.now() },
  completeDate: { type: Date, required: false},
});

const ProjectsSchema = new Schema(
  {
    name: {
      type: String, required: true, trim: true
    },
    owner: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    tasks: [tasks]
  }
);

export default model<ProjectsDoc>("Projects", ProjectsSchema);
