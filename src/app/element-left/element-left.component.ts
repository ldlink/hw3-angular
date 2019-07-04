import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IHotel } from '../mock';
import { HotelFilterPipe } from '../hotel-filter.pipe';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent implements OnInit {

  @Input() public hotels: IHotel[];
  @Input() public types: string[];

  @Input() private activeHotel: IHotel;
  @Output() public activeHotelChange = new EventEmitter<IHotel>();

  public title = 'Righteous indignation & like';
  public showHotels: IHotel[];
  public search: string;

  constructor() { }

  ngOnInit() {
    this.showHotels = this.hotels;
  }

  public onSearch(search){
    this.search = search;
    const filterPipe = new HotelFilterPipe();
    this.showHotels = filterPipe.transform(this.hotels, search);
    this.activeHotelChange.emit(this.showHotels[0]);
  }

  public setActive(hotel) {
    this.activeHotelChange.emit(hotel)
  }

}
