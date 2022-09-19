import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { ICollection } from './model/getCollection';
import { Task } from './model/task';
import { IEntity } from './model/getEntity';

const baseURL: string = "http://localhost:8080/tasks";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    getAllTasks(): Observable<IEntity[]> {
        return this.http.get<ICollection>(`${baseURL}`).pipe(
            map((result: any) => {
                console.log(result); //<--it's an object
                //result={"_embedded": {"categories": [..]..}
                return result._embedded.taskOutDTOList; //just return "categories"
            }));
    }

    getTaskById(id: any): Observable<IEntity> {
        return this.http.get<IEntity>(`${baseURL}/${id}`)
    }

    createTask(task: Task): Observable<Object> {
        return this.http.post(`${baseURL}`, task)
    }

    update(id: any, task: Task): Observable<Object> {
        return this.http.put(`${baseURL}/${id}`, task);
    }

    deleteTask(id: any): Observable<Object> {
        return this.http.delete(`${baseURL}/${id}`);
    }

}
