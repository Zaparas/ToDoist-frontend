import { Component, OnInit } from '@angular/core';
import { Task, Priority } from '../model/task';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import * as moment from "moment";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    createTaskForm!: FormGroup;
    task: Task = new Task();
    prior = Priority;
    enumKeys: string[] = [];

    constructor(
        private service: AppService,
        private router: Router,
        private formBuilder: FormBuilder

    ) {
        this.enumKeys = Object.keys(this.prior).filter(key => isNaN(+key));

    }

    ngOnInit(): void {
        console.log(this.prior)
        console.log(this.enumKeys)

        this.createTaskForm = this.formBuilder.group({
            name: [null, Validators.required],
            dueDate: [null, this.dateValidator],
            priority: [null, Validators.required]
        });
        console.log(this.createTaskForm.controls['dueDate'])
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


        console.log(this.createTaskForm);
        if (!this.createTaskForm.valid) {
            return;
        }

        this.task = this.createTaskForm.value;

        console.log(this.createTaskForm.value);
        console.log(this.task);



        this.saveTask();
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

    onChange() {
        console.log(this.createTaskForm.controls['dueDate'].errors)
    }

}
