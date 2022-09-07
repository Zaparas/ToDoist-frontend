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

  // id: number;

  // @Input()
  // imgurl:Url;

  // @Input()
  // description: String;

  constructor() {
    // this.task = TASKS;
    // this.id = 1;
    // this.imgurl = 'https://infoteam.de/typo3conf/ext/triebwerk_sitepackage/Resources/Public/Images/logo-infoteam.svg';
    // this.description =
    //   "The description of the task to be completed goes here! ^^  This is a wonderful task. ";
  }

  ngOnInit(): void {}
}
