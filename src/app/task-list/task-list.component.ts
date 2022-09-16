import { Component, Input, OnInit } from "@angular/core";
import { Priority, Task } from "../model/task";
import { AppService } from "../app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  tasks?: Task[];
  // priority?: Priority[];

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks() {
    this.service.getAllTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  taskDetails(id: any) {
    this.router.navigate(["task-details", id]);
  }

  updateTask(id: any) {
    this.router.navigate(["update-task", id]);
  }

  deleteTask(id: any) {
    this.service.deleteTask(id).subscribe((data) => {
      console.log(data);
      this.getTasks();
    });
  }

  getColor(priority: any): object {
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
