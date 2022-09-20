import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from './rest.service';

import { Task } from './model/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
    tasks = this.tasks$.asObservable()

    constructor(private service: AppService) { }

    getTasksList(): void {
        this.service.getAllTasks().subscribe((data) => {
            this.tasks$.next(data)
        })
    }

    createTask(data: Task): Observable<Object> {
        return this.service.createTask(data)
    }

    deleteTask(id: any): void {
        this.service.deleteTask(id).subscribe(() => this.getTasksList())
    }
}
