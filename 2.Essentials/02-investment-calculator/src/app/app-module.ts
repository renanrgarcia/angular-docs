import { NgModule } from '@angular/core';
import { App } from './app';
import { Header } from './header/header';
import { InvestmentResults } from './investiment-results/investment-results';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input-module';

@NgModule({
  declarations: [App, Header, InvestmentResults],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [App],
})
export class AppModule {}
