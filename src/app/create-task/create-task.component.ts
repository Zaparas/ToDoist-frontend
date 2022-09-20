import { Component, OnInit } from "@angular/core";
import { Task, Priority } from "../model/task";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { TaskService } from "../task.service";
import { ValidatorsService } from "../validators.service";

@Component({
    selector: "app-create-task",
    templateUrl: "./create-task.component.html",
    styleUrls: ["./create-task.component.css"],
})
export class CreateTaskComponent implements OnInit {
    createTaskForm!: FormGroup;
    task: Task = new Task();
    prior = Priority;
    enumKeys: string[] = [];

    constructor(
        private taskService: TaskService,
        private validators: ValidatorsService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.enumKeys = Object.keys(this.prior).filter((key) => isNaN(+key));
    }

    ngOnInit(): void {
        this.createTaskForm = this.formBuilder.group({
            name: [null, Validators.required],
            dueDate: [null, this.validators.dateValidator],
            priority: [null, Validators.required],
        });
    }

    goToTaskList() {
        this.router.navigate(["/tasks"]);
    }

    onSubmit() {
        if (!this.createTaskForm.valid) {
            return;
        }

        this.task = this.createTaskForm.value;

        this.taskService.createTask(this.task).subscribe(() => {
            this.taskService.getTasksList()
            this.goToTaskList();
        })
    }    
}
