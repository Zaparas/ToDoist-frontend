import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskRequestServiceService {

  private baseUrl = 'http://localhost:8080/api';

  constructor() { }
}