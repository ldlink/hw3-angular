import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../shared/interface';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(hotels: IHotel[], search: string): IHotel[] {
    if(!search || !hotels ){
      return hotels;
    }
    return hotels.filter((hotel: IHotel) => hotel.type === search);
  }

}
