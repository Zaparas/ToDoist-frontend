import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-task-card',
  templateUrl: './to-do-task-card.component.html',
  styleUrls: ['./to-do-task-card.component.css']
})
export class ToDoTaskCardComponent implements OnInit {

  @Input()
  taskname:String;

  // @Input()
  // imgurl:Url;

  @Input()
  description:String;

  constructor() {
    this.taskname="Uninitialized Task Card Name"
    // this.imgurl = 'https://infoteam.de/typo3conf/ext/triebwerk_sitepackage/Resources/Public/Images/logo-infoteam.svg';
    this.description="The description of the task to be completed goes here! ^^  This is a wonderful task. "
   }

  ngOnInit(): void {
  }

}
