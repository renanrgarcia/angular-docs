import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { type User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) user: User | undefined;
  isAddingNewTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user ? this.user.id : '');
  }

  onStartAddTask() {
    this.isAddingNewTask = true;
  }

  onCloseAddTask() {
    this.isAddingNewTask = false;
  }
}
