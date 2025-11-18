import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  // initialInvestment = '';
  // annualInvestment = '';
  // expectedReturn = '5';
  // duration = '10';

  constructor(private userInputService: UserInputService) {}

  onSubmit() {
    this.userInputService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
      // initialInvestment: +this.initialInvestment,
      // annualInvestment: +this.annualInvestment,
      // expectedReturn: +this.expectedReturn,
      // duration: +this.duration,
    });

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
    // this.initialInvestment = '';
    // this.annualInvestment = '';
    // this.expectedReturn = '5';
    // this.duration = '10';
  }
}
