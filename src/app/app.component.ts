import { Component } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTimeToDisplay = '';
  title = 'RhamsLibraryFrontend';
  constructor(private service: DateTimeService){};

  ngOnInit(){
    this.dateTimeToDisplay = this.service.getCurrentDateTime();
  }
}
