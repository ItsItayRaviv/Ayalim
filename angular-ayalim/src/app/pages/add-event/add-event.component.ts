import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../services/event/event.service';
import { CommonModule } from '@angular/common';
import { EventInfo } from '../../interfaces/event-info';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})

export class AddEventComponent {
  addEventForm = new FormGroup({
    eventName: new FormControl(''),
    eventLocation: new FormControl(''),
    eventDatetime: new FormControl<Date>(new Date),
    eventDescription: new FormControl('')
  });
  occationInfo: EventInfo = {
    id: '',
    name: '',
    location: '',
    dateInput: '',
    dateTime: new Date(),
    formattedDate: '',
    description: '',
    photo: '',
  }

  minDate = new Date();

  constructor(private occationService: EventService) {}
  
  submitAddEvent() {
    // this.eventService.addEvent(
    //   this.addEventForm.value.eventName ?? '',
    //   this.addEventForm.value.eventLocation ?? ''
    // );
    this.occationInfo.name = this.addEventForm.value.eventName ?? '';
    this.occationInfo.location = this.addEventForm.value.eventLocation ?? '';
    this.occationInfo.description = this.addEventForm.value.eventDescription ?? '';
    this.occationInfo.dateTime = this.addEventForm.value.eventDatetime ?? new Date();
    this.occationService.createOccasion(this.occationInfo)

  }
}
