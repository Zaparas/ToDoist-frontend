import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-update-task',
    templateUrl: './update-task.component.html',
    styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

    id: any;
    task: Task = new Task();
    constructor(
        private service: AppService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.service.getTaskById(this.id).subscribe({
            next: (data) => {
                this.task = data;
            },
            error: (e) => console.log(e)
        });
    }

    onSubmit() {
        this.service.update(this.id, this.task).subscribe({
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

}
