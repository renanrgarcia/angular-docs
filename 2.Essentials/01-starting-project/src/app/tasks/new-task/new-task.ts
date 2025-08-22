import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { type NewTask } from '../task/task.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() add = new EventEmitter<NewTask>();
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newTask: NewTask = {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDueDate(),
      };
      this.add.emit(newTask);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
