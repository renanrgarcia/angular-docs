import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { TasksComponent } from './tasks/tasks.component';
import { type User } from './user/user.model';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  // imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class AppComponent {
  protected readonly title = signal('01-starting-project');
  users = DUMMY_USERS;
  selectedUserId?: string;

  onUserSelected(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser(): User | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
