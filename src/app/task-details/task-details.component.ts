import { Component, OnInit } from "@angular/core";
import { Task } from "../model/task";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../rest.service";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"],
})
export class TaskDetailsComponent implements OnInit {
  id: any;
  task!: Task;
  constructor(private route: ActivatedRoute, private service: AppService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.task = new Task();
    this.service.getTaskById(this.id).subscribe((data) => {
      this.task = data;
    });
  }
}
