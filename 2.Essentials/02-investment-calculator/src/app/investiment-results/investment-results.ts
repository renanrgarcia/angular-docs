import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { UserInputService } from '../user-input/user-input.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  constructor(private userInputService: UserInputService) {}

  get resultsAvailable() {
    return this.userInputService.getInvestmentResults();
  }
}
