import { Component, Inject } from "@angular/core";
import { TASKS } from "src/data";
import { TaskRequestServiceService } from "./task-request-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ToDoIst";

  tasks = TASKS;

  constructor(
    @Inject(TaskRequestServiceService)
    private service: TaskRequestServiceService
  ) {}

  onTaskSelected(task: Task) {
    console.log("App component", task);
  }
}
