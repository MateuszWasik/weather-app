import React from 'react'
import { WeatherDataResponse } from '../../api/fetchWeatherDataWithCoords'
import './WeekWeatherComponent.sass'
import { WeatherIconComponent } from 'component/WeatherIcon/WeatherIconComponent'

type Props = {
  data: WeatherDataResponse[]
}

const WeekWeatherComponent: React.FC<Props> = ({data}) => {
  return (
    <div className="week-day-container">
      {data.map((weekDay: WeatherDataResponse, index) => {
        return (
          <div className="week-day" key={index}>
            <span>{weekDay.date}</span>
            <div className="weather-icon">
              <WeatherIconComponent icon={weekDay.icon}/>
            </div>
            <div className="week-weather-temperatures">
              <span className="max-temperature">{weekDay.maxTemperature}</span>
              <span className="min-temperature">{weekDay.minTemperature}</span>
            </div>
            {/*<div>Icons made by <a*/}
            {/*  href="https://www.flaticon.com/authors/iconixar"*/}
            {/*  title="iconixar"*/}
            {/*>iconixar</a> from <a*/}
            {/*  href="https://www.flaticon.com/"*/}
            {/*  title="Flaticon"*/}
            {/*>www.flaticon.com</a></div>*/}
          </div>
        )
      })}
    </div>
  )
}

export default WeekWeatherComponent
