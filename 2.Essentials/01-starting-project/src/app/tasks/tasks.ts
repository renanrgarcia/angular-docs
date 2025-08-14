import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from './task/dummy-tasks';
import { TaskComponent } from './task/task';
import { type User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = DUMMY_TASKS;

  @Input({ required: true }) user: User | undefined;

  get userTasks() {
    if (this.user) {
      return this.tasks.filter((task) => task.userId === this.user!.id);
    }
    return [];
  }

  onTaskComplete(taskId: string | undefined) {
    if (taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
  }
}
