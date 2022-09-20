import { Injectable } from '@angular/core';
import { Priority } from './model/task';


@Injectable({
    providedIn: 'root'
})
export class UserInterfaceService {

    constructor() { }

    getColor(priority: Priority | undefined): object {
        switch (priority) {
            case Priority.LOW:
                return { "background-color": "#236523" };
            case Priority.MID:
                return { "background-color": "#1A20C6" };
            case Priority.HIGH:
                return { "background-color": "#FF8400", color: "#000" };
            case Priority.TOP:
                return { "background-color": "#D10D0D" };
        }
        return { "background-color": "white" };
    }
}
