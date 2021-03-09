import React from 'react'
import { ReactComponent as SunriseSunset } from '../../assets/WeatherIcons/sunset-sunrise.svg'
import './SunriseSunsetComponent.sass'

type Props = {
  sunrise: number
  sunset: number
}

export const SunriseSunsetComponent: React.FC<Props> = ({sunrise, sunset}: Props) => {

  return (
    <div className="sunrise-sunset-component">
      <div className="sunrise-sunset-title">
        <span>Sunrise & Sunset</span>
      </div>
      <div className="sunrise-sunset-details">
        <div className="sunrise-sunset-icon">
          <SunriseSunset/>
        </div>
        <div className="sunrise-sunset-date">
          <span>{sunrise}</span>
          <span>{sunset}</span>
        </div>
      </div>
    </div>
  )
}