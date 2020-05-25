import React, { useEffect, useState } from 'react';
import {
  fetchWeatherDataWithCoords,
  fetchWeatherDataWithUserDefinedCity,
  IntialWeatherDataResponse,
  WeatherDataResponse
} from '../../api/fetchWeatherDataWithCoords';
import { Weather } from '../../component/Weather/Weather';

import * as moment from 'moment';
import Button from 'react-bootstrap/Button';

const userInputRegex = new RegExp('^[a-zA-Z]+$');

export const WeatherContainer: React.FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherDataResponse>(IntialWeatherDataResponse);
  const [userDefinedCity, setUserDefinedCity] = useState<string>('');
  const [weatherDataReady, setWeatherDataReady] = useState<boolean>(false);

  useEffect(() => {
    checkGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchDataFromLocation, geolocationDenied);
    } else {
      //to be implemented
      return null;
    }
  };

  const fetchDataFromLocation = (position: Position) => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };

    fetchWeatherDataWithCoords(location)
      .then(weatherDataResponse => {
        setWeatherData(prepareWeatherData(weatherDataResponse));
      })
      .then(() => setWeatherDataReady(true));
  };

  const geolocationDenied = () => {
    setWeatherDataReady(false);
  };


  const convertUnixTimestampToDate = (timestamp: number) => {
    return moment.unix(timestamp).format("DD MMM YYYY hh:mm a");
  };

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

  const CityInput = () => {
    return (
      <div className="chooser">
        <input
          value={userDefinedCity}
          onChange={checkRegexExpression}
          placeholder="Your City"
        />
        <Button onClick={onButtonClick}>Send</Button>
      </div>);
  };

  const checkRegexExpression = (inputElement: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = inputElement.target.value;

    if (!value) {
      setUserDefinedCity('');
    } else if (userInputRegex.test(value)) {
      setUserDefinedCity(value);
    }
  };

  const onButtonClick = () => {
    userDefinedCity && fetchWeatherDataWithUserDefinedCity(userDefinedCity)
      .then(result => {
        setWeatherData(prepareWeatherData(result))
        setWeatherDataReady(true)
      })
  };

  return <div className="App">

    {!weatherDataReady &&
    CityInput()}

    {weatherDataReady &&
    <Weather data={weatherData}/>}
  </div>;
};

export default WeatherContainer;
