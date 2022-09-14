export enum Priority {
    TOP,
    HIGH,
    NORMAL,
    LOW
}

export class Task {
    id?: any;
    name?: String;
    dueDate?: Date;
    priority?: Priority;
}
