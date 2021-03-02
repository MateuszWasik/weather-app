import React from 'react'
import './CurrentWeatherComponent.sass'
import { WeatherIconComponent } from '../WeatherIcon/WeatherIconComponent'

export const CurrentWeatherComponent: React.FC<any> = ({...data}) => {

  return (
    <div className="current-weather-component">
      <div className="current-weather-icon">
        <WeatherIconComponent icon={data.data.icon}/>
      </div>
      <div className="current-weather-details">
        <div className="current-weather-temperature">
          <span>{data.data.temperature}</span>
        </div>
        <div className="current-date-time">
          <span>{data.data.date}</span>
        </div>
      </div>
    </div>
  )
}
