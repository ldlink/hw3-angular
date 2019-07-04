import { Component } from '@angular/core';
import { hotels$, IHotel, types$ } from './mock';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hot Weather Widget';
  public hotels$: Observable<IHotel[]>;
  public types$: Observable<string[]> = types$;
  public activeHotel: IHotel;

  constructor() {
    this.hotels$ = hotels$.pipe(
      tap(hotels => this.activeHotel = hotels[0])
    );
  }

}
