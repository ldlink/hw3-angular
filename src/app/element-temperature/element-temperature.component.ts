import { Component, Input } from '@angular/core';
import { IWeather } from '../shared/interface';

@Component({
  selector: 'app-element-temperature',
  templateUrl: './element-temperature.component.html',
  styleUrls: ['./element-temperature.component.css']
})
export class ElementTemperatureComponent {

  @Input() public activeWeather: IWeather;

}
