import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() ticketCreated = new EventEmitter<Ticket>();
  ticketCreated = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('On init:', this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init:', this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.ticketCreated.emit({ title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
