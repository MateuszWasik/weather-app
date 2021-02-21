import * as queryString from 'querystring';

const apiKey = '748a5ce04cac6544fea0f6dbc487247f'
const units = 'metric'

export type GeocodingLocation = {
  latitude: string,
  longitude: string
}

export type FetchWeatherParams = {
  lon?: string,
  lat?: string,
  q?: string
  appid: string,
  units: string
  exclude?: string
}

export type WeatherDataResponse = {
  weather: string,
  date: string
  weatherDescription: string
  temperature: number | undefined
  tempFeelsLike: number
  minTemperature: number
  maxTemperature: number
  pressure: number
  humidity: number
  windSpeed: number
  cityName: string
  sunrise: string
  sunset: string
  icon: string
}

export const InitialWeatherDataResponse = [{
  weather: '',
  date: '',
  weatherDescription: '',
  temperature: 0,
  tempFeelsLike: 0,
  minTemperature: 0,
  maxTemperature: 0,
  pressure: 0,
  humidity: 0,
  windSpeed: 0,
  cloudsPercentage: 0,
  cityName: '',
  sunrise: '',
  sunset: '',
  icon: ''
}];

export const InitialCurrentDataResponse = {
  weather: '',
  date: '',
  weatherDescription: '',
  temperature: 0,
  tempFeelsLike: 0,
  minTemperature: 0,
  maxTemperature: 0,
  pressure: 0,
  humidity: 0,
  windSpeed: 0,
  cloudsPercentage: 0,
  cityName: '',
  sunrise: '',
  sunset: '',
  icon: ''
}

export const fetchGeocodingCoordinates = (userDefinedCity: string) => {
  const prepareFetchParameters: any = {
    q: userDefinedCity,
    limit: 1,
    appid: apiKey
  }

  const parsedParameters = queryString.stringify(prepareFetchParameters);

  return fetch(`https://api.openweathermap.org/geo/1.0/direct?${parsedParameters}`)
    .then(result => result.json());
}

export const fetchWeatherDataWithUserDefinedCity = (data: any) => {
  const prepareFetchParameters = {
    lon: data.longitude,
    lat: data.latitude,
    exclude: 'minutely, hourly, alerts',
    appid: apiKey,
    units: units
  };

  const parsedParameters = queryString.stringify(prepareFetchParameters);

  return fetch(`https://api.openweathermap.org/data/2.5/onecall?${parsedParameters}`)
    .then(result => result.json());
};
