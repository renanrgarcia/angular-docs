import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InvestimentResultsService } from './investiment-results.service';

@Component({
  selector: 'app-investiment-results',
  imports: [CurrencyPipe],
  templateUrl: './investiment-results.html',
  styleUrl: './investiment-results.css',
})
export class InvestimentResults {
  constructor(private investimentResultsService: InvestimentResultsService) {}

  get resultsAvailable() {
    // return this.investimentResultsService.calculateInvestmentResults().length > 0;
    return [{ year: 1, totalSavings: 1000, interest: 50, totalInterest: 50 }].length > 0;
  }
}
