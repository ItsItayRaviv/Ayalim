import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventInfo } from '../../interfaces/event-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EventService {
  private apiUrl = "http://localhost:3000/api/events";
  protected lastID = 3;
  protected eventInfoList: EventInfo[] = [
    {
      "id": 1,
      "name": "Event 1",
      "location": "Location 1",
      "photo": "Photo URL 1",
      "date": "2024-01-21",
      "time": "10:30"
  },
  {
      "id": 2,
      "name": "Event 2",
      "location": "Location 2",
      "photo": "Photo URL 2",
      "date": "2024-01-22",
      "time": "22:00"
  },
  {
      "id": 3,
      "name": "Event 3",
      "location": "Location 3",
      "photo": "Photo URL 3",
      "date": "2024-01-23",
      "time": "18:45"
  }
];
  constructor(private http: HttpClient) { 
  }
  
  getEvents(): Observable<EventInfo[]> {
    console.log('get events used');
    return this.http.get<EventInfo[]>(this.apiUrl);
  }


  getAllEventinfos(): EventInfo[] {
    return this.eventInfoList;
  }

  getEventInfoById(id: Number): EventInfo | undefined {
    return this.eventInfoList.find(EventInfo => EventInfo.id === id)
  }

  addEvent(eventName: string, eventLocation: string) {
    let newEvent: EventInfo = {
      id: ++this.lastID,
      name: eventName,
      location: eventLocation,
      photo: "no data",
      date: "no data",
      time: "no data",
    };
    this.eventInfoList.push(newEvent);
  }

}
