import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventInfo } from '../../interfaces/event-info';
import { EventService } from '../../services/event/event.service';
import { EventCardComponent } from '../../reusables/event-card/event-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, EventCardComponent, HttpClientModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventInfoList: EventInfo[] = [];
  dbOccasionInfo: Observable<EventInfo[]>;

  constructor(private eventService: EventService) {
    this.eventInfoList = this.eventService.getAllEventinfos();
    this.dbOccasionInfo = this.eventService.getOccasions();
  }
}