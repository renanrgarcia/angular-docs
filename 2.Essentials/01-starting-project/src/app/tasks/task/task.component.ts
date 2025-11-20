import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}

  onComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
