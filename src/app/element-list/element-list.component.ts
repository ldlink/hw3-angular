import { Component } from '@angular/core';
import { HotelListService } from '../services/hotel-list.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent {

  public title = 'Righteous indignation & like';

  constructor(
    public hotelList: HotelListService
  ) { }

}
