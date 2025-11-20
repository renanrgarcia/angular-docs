import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { InvestmentResults } from './investiment-results/investment-results';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, InvestmentResults, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
