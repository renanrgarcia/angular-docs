import { Injectable } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentResult } from '../investment-result.model';

@Injectable({
  providedIn: 'root',
})
export class UserInputService {
  private investmentResults: InvestmentResult[] = [];

  getInvestmentResults(): InvestmentResult[] {
    return this.investmentResults;
  }

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    this.investmentResults = [];
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      this.investmentResults.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }
}
