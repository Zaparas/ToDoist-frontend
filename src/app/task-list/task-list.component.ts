import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task'
import { AppService } from '../app.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks?: Task[];

    constructor(
        private service: AppService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getTasks();
    }

    private getTasks() {
        this.service.getAllTasks().subscribe(data => {
            this.tasks = data;
        });
    }

    taskDetails(id: any) {
        this.router.navigate(['task-details', id]);
    }

    updateTask(id: any) {
        this.router.navigate(['update-task', id]);
    }

    deleteTask(id: any) {
        this.service.deleteTask(id).subscribe(data => {
            console.log(data);
            this.getTasks();
        })
    }

}
