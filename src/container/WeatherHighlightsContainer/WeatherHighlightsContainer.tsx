import React from 'react'
import WindComponent from 'component/WindComponent/WindComponent'
import './WeatherHighligthsContainer.sass'
import { PressureComponent } from 'component/PressureComponent/PressureComponent'
import { SunriseSunsetComponent } from '../../component/SunriseSunsetComponent/SunriseSunsetComponent'
import { VisibilityComponent } from 'component/VisibilityComponent/VisibilityComponent'
import { UvIndexComponent } from 'component/UvComponent/UvIndexComponent'


const WeatherHighlightsContainer: React.FC<any> = ({data}) => {
  return(
    <div className="weather-highlights-container">
      <WindComponent windSpeed={data.windSpeed} windDeg={data.windDeg} />
      <SunriseSunsetComponent sunrise={data.sunrise} sunset={data.sunset} />
      <PressureComponent pressure={data.pressure} />
      <UvIndexComponent uvi={data.uvi} />
      <VisibilityComponent visibility={data.visibility} />
    </div>
  )
}

export default WeatherHighlightsContainer
