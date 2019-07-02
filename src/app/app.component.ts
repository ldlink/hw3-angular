import { Component, OnInit } from '@angular/core';
import { hotels$, IHotel } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Hot Weather Widget';
  public hotels$: Observable<IHotel[]> = hotels$;
  public activeHotel: IHotel;

  public ngOnInit(): void {
    // const active = this.hotels$.
    //   .map(hotels => this.activeHotel = hotels[0])
  }
}
