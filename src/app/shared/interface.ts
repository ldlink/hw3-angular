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
  rate:  number
  weather: IWeather,
  social_info: ISocial,
  type: string
}
