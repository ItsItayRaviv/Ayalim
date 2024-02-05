import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventInfo } from '../../interfaces/event-info';
import { EventService } from '../../services/event/event.service';
import { EventCardComponent } from '../../reusables/event-card/event-card.component';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, EventCardComponent, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // eventInfoList: EventInfo[] = [];
  occasionInfoObservable: Observable<EventInfo[]>;
  occInfo: EventInfo[] = [];

  constructor(private eventService: EventService) {
    // this.eventInfoList = this.eventService.getAllEventinfos();
    this.occasionInfoObservable = this.eventService.getOccasions();
    this.occasionInfoObservable.subscribe((getOccInfo: EventInfo[]) => {
      this.occInfo = eventService.transformDate(getOccInfo);
    });
  }
}