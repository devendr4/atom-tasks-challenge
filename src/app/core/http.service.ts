import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task, TasksResponse } from '../tasks/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTasks(lastTaskId = ''): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(
      `${this.apiUrl}/tasks?lastTask=${lastTaskId}`
    );
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  editTask(task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}`, task);
  }

  deleteTask(taskId: string): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
