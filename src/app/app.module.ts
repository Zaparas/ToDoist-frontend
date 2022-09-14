import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToDoTaskCardComponent } from "./to-do-task-card/to-do-task-card.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   FontAwesomeModule,
//   FaIconLibrary,
// } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [AppComponent, ToDoTaskCardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
