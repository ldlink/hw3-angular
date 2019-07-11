import { Injectable } from '@angular/core';
import { catchError, debounceTime, map, share, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { IHotel } from '../shared/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  private _hotels$ = new BehaviorSubject(true);
  private hotels$: Observable<IHotel[]>;

  public types$: Observable<string[]>;

  public _activeType$ = new BehaviorSubject(null);
  public activeType$: Observable<string> = this._activeType$.asObservable();

  public showHotels$: Observable<IHotel[]>;
  public activeHotel: IHotel;

  constructor(
    private http: HttpClient,
  ) {

    this.hotels$ = this._hotels$.asObservable()
      .pipe(
        switchMap(() => this.getLoadList()),
        share()
      );

    this.showHotels$ = combineLatest(this.hotels$, this.activeType$)
      .pipe(
        debounceTime(300),
        map(([hotels, type]) => {
          if(type == null) {
            return hotels;
          }
          return hotels.filter(hotel => hotel.type === type)
        }),
        tap(hotels => this.activeHotel = hotels[0])
      );

    this.types$ = this.hotels$.pipe(
      map(hotels => [...new Set(hotels.map(hotel => hotel.type))])
    );
  }

  public onSearch(type: string){
    this._activeType$.next(type);
  }

  public onReload() {
    this.onSearch(null);
    this._hotels$.next(true)
  }

  public setActive(hotel) {
    this.activeHotel = hotel;
  }

  public get activeWeather() {
    return this.activeHotel ? this.activeHotel.weather : [];
  }

  public get activeSocial() {
    return this.activeHotel ? this.activeHotel.social_info : [];
  }

  private getLoadList(){
    return this.http.get<IHotel[]>(` http://localhost:3000/hotels`)
      .pipe(
        catchError((err) => {
          return of([]);
        })
      );
  }

}
