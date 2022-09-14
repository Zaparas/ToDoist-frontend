import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    task: Task = new Task();

    constructor(
        private service: AppService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    saveTask() {
        this.service.createTask(this.task).subscribe({
            next: (data) => {
                console.log(data);
                this.goToTaskList();
            },
            error: (e) => console.log(e)
        })
    }

    goToTaskList() {
        this.router.navigate(['/tasks']);
    }

    onSubmit() {
        console.log(this.task);
        this.saveTask();
    }

}
