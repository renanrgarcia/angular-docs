import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  userImage = computed(() => 'assets/users/' + this.selectedUser().avatar); // Use computed to derive the user image path based on the selected user

  // get userImage() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  selectUser() {
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }
}
