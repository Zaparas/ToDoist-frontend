import { Component, OnInit } from '@angular/core';
import { Task, Priority } from '../model/task';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import * as moment from "moment";

@Component({
    selector: 'app-update-task',
    templateUrl: './update-task.component.html',
    styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

    updateTaskForm!: FormGroup;
    id: any;
    task: Task = new Task();
    prior = Priority;
    enumKeys: string[] = [];

    constructor(
        private service: AppService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.enumKeys = Object.keys(this.prior).filter(key => isNaN(+key));
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.service.getTaskById(this.id).subscribe({
            next: (data) => {
                this.task = data;
                this.updateTaskForm = this.formBuilder.group({
                    name: [this.task.name, Validators.required],
                    dueDate: [this.task.dueDate, this.dateValidator],
                    priority: [this.task.priority, Validators.required]
                });
            },
            error: (e) => console.log(e)
        });
    }

    onSubmit() {
        if (!this.updateTaskForm.valid) {
            return;
        }

        this.task = this.updateTaskForm.value;

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

    dateValidator(format = "YYYY-MM-DD"): any {
        return (control: FormControl): { [key: string]: any } => {
            const val = moment(control.value, format, true);

            if (!val.isValid()) {
                return { invalidDate: true };
            }

            return { invalidDate: false };
        };
    }

}
