import { Priority } from "./task";
export interface IEntity {
    id: String
    name: String
    dueDate: Date
    priority: Priority
    _links: {
        self: { href: string },
        tasks: { href: string }
    };

}
