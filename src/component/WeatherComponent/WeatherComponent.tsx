import React from 'react'
import { WeatherDataResponse } from '../../api/fetchWeatherDataWithCoords'
import './WeatherComponent.sass'
import { WeatherIconComponent } from 'component/WeatherIcon/WeatherIconComponent'

type Props = {
  data: WeatherDataResponse
}

const WeatherComponent: React.FC<Props> = ({data}) => {
  return (
    <div className="weather-component">
      <div className="weather-icon">
        <WeatherIconComponent icon={data.icon}/>
      </div>
      <div className="weather-details">
        <table className='weather-details-table'>
          <tbody>
          <tr className="date">
            <td>Date</td>
            <td>{data.date}</td>
          </tr>
          <tr className="temperature">
            <td>Temperature</td>
            <td>{data.temperature} Celsius</td>
          </tr>
          <tr className="pressure">
            <td>Pressure</td>
            <td>{data.pressure} hPa</td>
          </tr>
          <tr className="humidity">
            <td>Humidity</td>
            <td>{data.humidity} %</td>
          </tr>
          <tr className="weather">
            <td>Weather</td>
            <td>{data.weatherDescription}</td>
          </tr>
          <tr className="sunrise">
            <td>Sunrise</td>
            <td>{data.sunrise}</td>
          </tr>
          <tr className="sunset">
            <td>Sunset</td>
            <td>{data.sunset}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default WeatherComponent
