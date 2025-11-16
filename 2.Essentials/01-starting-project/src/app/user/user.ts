import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected = false;
  @Output() selectId = new EventEmitter<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectId.emit(this.user.id);
  }
}
