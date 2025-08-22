import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from './task/dummy-tasks';
import { TaskComponent } from './task/task';
import { type User } from '../user/user.model';
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = DUMMY_TASKS;

  @Input({ required: true }) user: User | undefined;
  isAddingNewTask: boolean = false;

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

  set showNewTask(value: boolean) {
    this.showNewTask = value;
  }

  onStartAddTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddTask() {
    this.isAddingNewTask = false;
  }

  onAddTask(task: NewTask) {
    if (this.user) {
      const newTask: Task = {
        ...task,
        id: Math.random().toString(),
        userId: this.user.id,
      };
      this.tasks.push(newTask);
      this.isAddingNewTask = false;
    }
  }
}
