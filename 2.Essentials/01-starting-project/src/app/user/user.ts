import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selectId = new EventEmitter<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectId.emit(this.user.id);
  }
}
