import { Component, Input, input } from '@angular/core';
import { EventInfo } from '../../interfaces/event-info';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() eventInfo!: EventInfo;
}
