import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTaskCardComponent } from './to-do-task-card.component';

describe('ToDoTaskCardComponent', () => {
  let component: ToDoTaskCardComponent;
  let fixture: ComponentFixture<ToDoTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
