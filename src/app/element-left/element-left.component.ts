import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../mock';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit {

  @Input() public hotels: IHotel[]

  @Input() public activeHotel: IHotel;
  @Output() public activeHotelChange = new EventEmitter<IHotel>();

  public title = 'Righteous indignation & like';

  constructor() { }

  ngOnInit() {
  }

  public setActive(hotel) {
    this.activeHotelChange.emit(hotel)
  }

}
