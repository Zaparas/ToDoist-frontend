import { Task } from "./task";

export interface IEntity {
    task: Task,
    _links: {
        self: {href: string},
        tasks: {href: string}
    };
    
  }
