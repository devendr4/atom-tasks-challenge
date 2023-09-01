export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  deleted?: boolean;
  createdAt: Date;
}

export interface TasksResponse {
  lastTaskId: string;
  tasks: Task[];
}
