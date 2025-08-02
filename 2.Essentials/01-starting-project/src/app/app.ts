import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { Tasks } from './tasks/tasks';
import { User, UserType } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('01-starting-project');
  users = DUMMY_USERS;
  selectedUserId?: string;

  onUserSelected(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser(): UserType | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
