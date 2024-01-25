import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { AddEventComponent } from './pages/add-event/add-event.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'Event/:id',
        component: EventDetailsComponent,
        title: 'event-details',
    },
    {
        path: 'AddEvent',
        component: AddEventComponent,
        title: 'add an Event'
    }
];
