import { Component, Input, OnInit } from "@angular/core";
import { TASKS } from "src/data";
import { Task } from "../task";

@Component({
  selector: "app-to-do-task-card",
  templateUrl: "./to-do-task-card.component.html",
  styleUrls: ["./to-do-task-card.component.css"],
})
export class ToDoTaskCardComponent implements OnInit {
  @Input()
  task: Task;

  constructor() {
    this.task = TASKS;
  }

  ngOnInit(): void {}
}
