import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control'; // Discouraged way
  // @HostListener('click') onClick() {
  //   console.log('Control clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('After render:', this.control()?.nativeElement);
    });

    afterNextRender(() => {
      console.log('After next render:', this.control()?.nativeElement);
    });
  }

  ngAfterContentInit(): void {
    console.log('After content init:', this.control()?.nativeElement);
  }

  onClick() {
    console.log('Control clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
