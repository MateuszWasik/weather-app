import React, { useEffect, useState } from 'react';
import { fetchWeatherData, IntialWeatherDataResponse, WeatherDataResponse } from '../../api/fetchWeatherData';
import { Weather } from '../../component/Weather/Weather';

import * as moment from 'moment'

export const WeatherContainer: React.FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherDataResponse>(IntialWeatherDataResponse);

  useEffect(() => {
    checkGeolocation();
  }, []);

  const checkGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchDataFromLocation);
    } else {
      //to be implemented
      return null;
    }
  };

  const fetchDataFromLocation = (position: any) => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };

    fetchWeatherData(location).then(weatherDataResponse => {
      setWeatherData(prepareWeatherData(weatherDataResponse));
    });
  };

  const convertUnixTimestampToDate = (timestamp: number) => {
      return moment.unix(timestamp).format("DD MMM YYYY hh:mm a")
  }

  const prepareWeatherData = (response: any) => {
    return {
      cityName: response.name,
      weather: response.weather[0].main,
      weatherDescription: response.weather[0].description,
      temperature: Math.round(response.main.temp),
      tempFeelsLike: response.main.feels_like,
      minTemperature: Math.round(response.main.temp_min),
      maxTemperature: Math.round(response.temp_max),
      pressure: response.main.pressure,
      humidity: response.main.humidity,
      windSpeed: Math.round(response.wind.speed),
      cloudsPercentage: response.clouds.all,
      sunrise: convertUnixTimestampToDate(response.sys.sunrise),
      sunset: convertUnixTimestampToDate(response.sys.sunset)
    };
  };

  return <div className="App">
    <header className="App-header">
    </header>
    <Weather
      data={weatherData}
    />
  </div>;
};

export default WeatherContainer;
