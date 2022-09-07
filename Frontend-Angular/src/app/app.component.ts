import { Component } from "@angular/core";
import { TASKS } from "src/data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ToDoIst";

  tasks = TASKS;

  onTaskSelected(task: Task) {
    console.log("App component", task);
  }
}
