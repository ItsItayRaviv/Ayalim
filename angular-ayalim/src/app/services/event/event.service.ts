import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventInfo } from '../../interfaces/event-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EventService {
  private apiUrl = "http://localhost:3000/";
  protected lastID = 3;
//   protected eventInfoList: EventInfo[] = [
//     {
//       "id": '1',
//       "name": "Event 1",
//       "location": "Location 1",
//       "photo": "Photo URL 1",
//       "date": "2024-01-21",
//       "hour": "10:30",
//       "dateTime": new Date(24, 2, 1, 20, 15)
//   },
//   {
//       "id": '2',
//       "name": "Event 2",
//       "location": "Location 2",
//       "photo": "Photo URL 2",
//       "date": "2024-01-22",
//       "hour": "22:00",
//       "dateTime": new Date(24, 2, 5, 11, 25)
//   },
//   {
//       "id": '3',
//       "name": "Event 3",
//       "location": "Location 3",
//       "photo": "Photo URL 3",
//       "date": "2024-01-23",
//       "hour": "18:45",
//       "dateTime": new Date(24, 2, 8, 15, 35)
//   }
// ];
  
constructor(private http: HttpClient) { 
  }
  
  createOccasion(occasion: EventInfo) {
    try {
      this.http.post(this.apiUrl + 'add-occasion', occasion).subscribe(response => {
        console.log('response recieves', response);
      }, error => {
        console.error('error', error);
      })
      console.log('add occasion request sent');
      console.log(occasion);
    } catch (error) {
      console.log(error);
    }
  }

  getOccasions(): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>(this.apiUrl + 'occasions')
  }

  transformDate(occasionInfo: EventInfo[]): EventInfo[] {
    occasionInfo.forEach((occasion) => {
      occasion.dateTime = new Date(occasion.dateInput);
      occasion.formattedDate = 
        `${occasion.dateTime.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
         | ${occasion.dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    });
    console.log(occasionInfo);
    
    return occasionInfo;
  }

  // getEvents(): Observable<EventInfo[]> {
  //   return this.http.get<EventInfo[]>(this.apiUrl + 'api/events');
  // }

  // getAllEventinfos(): EventInfo[] {
  //   return this.eventInfoList;
  // }

  // getEventInfoById(id: Number): EventInfo | undefined {
  //   return this.eventInfoList.find(EventInfo => EventInfo.id === id)
  // }

  // addEvent(eventName: string, eventLocation: string) {
    
  // }

}
