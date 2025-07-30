import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01-starting-project');
}
