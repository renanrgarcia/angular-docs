import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task: Task | undefined;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task?.id);
  }
}
