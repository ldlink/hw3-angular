import { Component, Input } from '@angular/core';
import { IHotel } from '../../shared/interface';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  @Input() public hotel: IHotel;

}
