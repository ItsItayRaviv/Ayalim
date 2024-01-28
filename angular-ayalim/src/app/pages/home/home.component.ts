import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventInfo } from '../../interfaces/event-info';
import { EventService } from '../../services/event/event.service';
import { EventCardComponent } from '../../reusables/event-card/event-card.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, EventCardComponent, HttpClientModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eventInfoList: EventInfo[] = [];

  constructor(private eventService: EventService) {
    this.eventInfoList = this.eventService.getAllEventinfos();
  }
}