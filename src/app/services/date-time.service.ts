import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateTimeService {
    getCurrentDateTime(): string {
        return (new Date()).toISOString();
    }
}