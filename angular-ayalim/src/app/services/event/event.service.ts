import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventInfo } from '../../interfaces/event-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EventService {
  private apiUrl = "http://localhost:3000/";
  protected lastID = 3;
  protected eventInfoList: EventInfo[] = [
    {
      "id": '1',
      "name": "Event 1",
      "location": "Location 1",
      "photo": "Photo URL 1",
      "dateOnly": "2024-01-21",
      "hour": "10:30",
      "date": new Date(24, 2, 1, 20, 15)
  },
  {
      "id": '2',
      "name": "Event 2",
      "location": "Location 2",
      "photo": "Photo URL 2",
      "dateOnly": "2024-01-22",
      "hour": "22:00",
      "date": new Date(24, 2, 5, 11, 25)
  },
  {
      "id": '3',
      "name": "Event 3",
      "location": "Location 3",
      "photo": "Photo URL 3",
      "dateOnly": "2024-01-23",
      "hour": "18:45",
      "date": new Date(24, 2, 8, 15, 35)
  }
];
  constructor(private http: HttpClient) { 
  }
  
  getEvents(): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>(this.apiUrl + 'api/events');
  }

  getOccasions(): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>(this.apiUrl + 'occasions')
  }


  getAllEventinfos(): EventInfo[] {
    return this.eventInfoList;
  }

  // getEventInfoById(id: Number): EventInfo | undefined {
  //   return this.eventInfoList.find(EventInfo => EventInfo.id === id)
  // }

  // addEvent(eventName: string, eventLocation: string) {
    
  // }

}
