import { Component } from '@angular/core';
import { HotelListService } from './services/hotel-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hot Weather Widget';

  constructor(
    public hotelList: HotelListService
  ) {}
}
