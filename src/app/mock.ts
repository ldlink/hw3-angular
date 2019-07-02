import { Observable, of } from 'rxjs';

export interface IWeather {
  title: string,
  icon: string,
  water: number,
  temperature: number
}

export interface ISocial {
  title: string,
  img: string,
  img_s: string,
  followers: number,
  following: number
}

export interface IHotel {
  img: string,
  img_s: string,
  name: string,
  address: string,
  phone:  number
  weather: IWeather,
  social_info: ISocial,
  type: string
}

export const hotels: IHotel[] = [
  {
    img: 'assets/images/1.jpg',
    img_s: 'assets/images/r1.jpg',
    address: 'string',
    phone:  79991112233,
    name: 'noname',
    weather: {
      title: 'string',
      icon: 'assets/images/cloudy.png',
      water: 10,
      temperature: 12
    },
    social_info:{
      title: 'string',
      img: 'assets/images/b1.jpg',
      img_s: 'assets/images/rb1.jpg',
      followers: 10,
      following: 99
    },
    type: 'string'
  },
  {
    img: 'assets/images/2.jpg',
    img_s: 'assets/images/r2.jpg',
    name: 'Banyan Tree Kuala Lumpur',
    address: 'Kuala Lumpur, Malaysia ',
    phone:  6030000000,
    weather: {
      title: 'string2',
      icon: 'assets/images/cloudy.png',
      water: 6,
      temperature: 6
    },
    social_info:{
      title: 'string2',
      img: 'assets/images/b2.jpg',
      img_s: 'assets/images/rb2.jpg',
      followers: 1,
      following: 2
    },
    type: 'string2'
  },
  {
    img: 'assets/images/3.jpg',
    img_s: 'assets/images/r3.jpg',
    name: 'Spa, Phuket',
    address: 'Phuket Town, Thailand',
    phone:  70000000,
    weather: {
      title: 'string2',
      icon: 'assets/images/cloudy.png',
      water: 6,
      temperature: 6
    },
    social_info:{
      title: 'string2',
      img: 'assets/images/b3.jpg',
      img_s: 'assets/images/rb3.jpg',
      followers: 1,
      following: 2
    },
    type: 'string2'
  }
];

export const hotels$: Observable<IHotel[]> = of(hotels);
