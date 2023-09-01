import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task, TasksResponse } from '../tasks/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'http://localhost:5000/atom-ebfdc/us-central1/default/v1';
  constructor(private http: HttpClient) {}

  getTasks(lastTaskId = ''): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(
      `${this.apiUrl}/tasks?lastTask=${lastTaskId}`
    );
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  editTask(task: Task): Observable<TasksResponse> {
    return this.http.put<TasksResponse>(
      `${this.apiUrl}/tasks/${task.id}`,
      task
    );
  }

  deleteTask(taskId: string): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
