import { TestBed } from '@angular/core/testing';

import { TaskRequestServiceService } from './task-request-service.service';

describe('TaskRequestServiceService', () => {
  let service: TaskRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
