import { Component } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent {
  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    console.log('Entered title:', title);
    console.log('Entered ticket text:', ticketText);
    form.reset();
  }
}
