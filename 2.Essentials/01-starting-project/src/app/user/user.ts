import { Component, EventEmitter, Input, output, Output } from '@angular/core';

// type UserType = {
//   id: string;
//   name: string;
//   avatar: string;
// };

export interface UserType {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Output() selectId = new EventEmitter<string>();

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectId.emit(this.user.id);
  }
}
