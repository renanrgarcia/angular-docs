import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { InvestimentResults } from './investiment-results/investiment-results';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, InvestimentResults, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('02-investment-calculator');
}
