import { Component, OnInit } from "@angular/core";
import { Task, Priority } from "../model/task";
import { AppService } from "../rest.service";
import { ValidatorsService } from "../validators.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { IEntity } from "../model/getEntity";

@Component({
    selector: "app-update-task",
    templateUrl: "./update-task.component.html",
    styleUrls: ["./update-task.component.css"],
})
export class UpdateTaskComponent implements OnInit {
    updateTaskForm!: FormGroup;
    id: any;
    entity?: IEntity;
    task: Task = new Task();
    prior = Priority;
    enumKeys: string[] = [];

    constructor(
        private service: AppService,
        private validators: ValidatorsService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.enumKeys = Object.keys(this.prior).filter((key) => isNaN(+key));
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params["id"];

        this.service.getTaskById(this.id).subscribe({
            next: (data) => {
                this.entity = data;
                this.updateTaskForm = this.formBuilder.group({
                    name: [this.entity.name, Validators.required],
                    dueDate: [this.entity.dueDate, this.validators.dateValidator],
                    priority: [this.entity.priority, Validators.required],
                });
            },
            error: (e) => console.log(e),
        });
    }

    onSubmit() {
        if (!this.updateTaskForm.valid) {
            return;
        }

        this.task = this.updateTaskForm.value;

        this.service.update(this.id, this.task).subscribe({
            next: () => {
                this.goToTaskList();
            },
            error: (e) => console.log(e),
        });
    }

    goToTaskList() {
        this.router.navigate(["/tasks"]);
    }
}
