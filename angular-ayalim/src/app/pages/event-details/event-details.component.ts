import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event/event.service';
import { EventInfo } from '../../interfaces/event-info';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  // route: ActivatedRoute = inject(ActivatedRoute);
  // eventService = inject(EventService);
  event: EventInfo | undefined;
  eventId = 0;
  constructor(private occasionService: EventService, private route: ActivatedRoute) {
    this.eventId = Number(this.route.snapshot.params['id']);
    // this.event = this.eventService.getEvents(this.eventId);
  }
}
