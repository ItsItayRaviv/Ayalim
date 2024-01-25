import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ RouterModule, ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})

export class AddEventComponent {
  eventService = inject(EventService);
  addEventForm = new FormGroup({
    eventName: new FormControl(''),
    eventLocation: new FormControl(''),
  });

  submitAddEvent() {
    this.eventService.addEvent(
      this.addEventForm.value.eventName ?? '',
      this.addEventForm.value.eventLocation ?? ''
    );
  }
}
