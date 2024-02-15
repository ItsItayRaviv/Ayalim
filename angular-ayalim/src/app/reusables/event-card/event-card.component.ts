import { AfterViewInit, Component, Input } from '@angular/core';
import { EventInfo } from '../../interfaces/event-info';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements AfterViewInit {
  @Input() eventInfo!: EventInfo;
  date: string = "";

  constructor() {
  }

  ngAfterViewInit(): void {;
  }
}