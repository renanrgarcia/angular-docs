import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input';

@NgModule({
  declarations: [UserInput],
  imports: [CommonModule, FormsModule],
  exports: [UserInput],
})
export class UserInputModule {}
