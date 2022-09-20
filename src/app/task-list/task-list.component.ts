import { Component, OnInit } from "@angular/core";
import { Task } from "../model/task";
import { TaskService } from "../task.service";
import { UserInterfaceService } from "../user-interface.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-task-list",
    templateUrl: "./task-list.component.html",
    styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
    tasks?: Task[];

    constructor(
        public taskService: TaskService,
        public userInterface: UserInterfaceService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.taskService.tasks.subscribe((data) => {
            this.tasks = data
        })
        this.taskService.getTasksList()
    }

    taskDetails(id: any) {
        this.router.navigate(["task-details", id]);
    }

    updateTask(id: any) {
        this.router.navigate(["update-task", id]);
    }
}
