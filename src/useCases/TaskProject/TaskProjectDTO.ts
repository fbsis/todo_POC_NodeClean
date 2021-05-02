

export enum Status {
  todo,
  finished,
}

export interface ITaskProjectRequestDTO {
  id?: string,
  status: Status,
  description: string
  creatingDate?: Date
  completeDate?: Date
}