import { Time } from "@angular/common";

export interface EventInfo {
    id: string,
    name: string, //required for creation
    location: string, //required for creation
    photo: string,
    dateInput: string,
    dateTime: Date, //required for creation
    formattedDate: string,
    description: string //required for creation
}