import React from 'react';
import { WeatherDataResponse } from '../../api/fetchWeatherDataWithCoords';

type Props = {
  data: WeatherDataResponse
}

export const Weather: React.FC<Props> = ({data}) => {
  return (
    <div className="weather-component">
      <table>
        <tbody>
        <tr>
          <td>City</td>
          <td>{data.cityName}</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>{data.temperature} Celsius</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{data.pressure} hPa</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{data.humidity} %</td>
        </tr>
        <tr>
          <td>Weather</td>
          <td>{data.weatherDescription}</td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>{data.sunrise}</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{data.sunset}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
