import { Component, OnInit, Input } from '@angular/core';
import { IHotel, IWeather } from '../mock';

@Component({
  selector: 'app-element-temperature',
  templateUrl: './element-temperature.component.html',
  styleUrls: ['./element-temperature.component.css']
})
export class ElementTemperatureComponent implements OnInit {

  @Input() public activeWeather: IWeather;

  constructor() { }

  ngOnInit() {
  }

}
