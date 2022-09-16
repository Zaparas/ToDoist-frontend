export enum Priority {
  TOP = "TOP",
  HIGH = "HIGH",
  MID = "MID",
  LOW = "LOW",
}

export class Task {
  id?: String;
  name?: String;
  dueDate?: Date;
  priority?: Priority;
}
