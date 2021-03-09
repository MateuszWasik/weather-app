import React from 'react'
import WindComponent from 'component/WindComponent/WindComponent'
import { SunriseSunsetComponent } from '../../component/SunriseSunsetComponent/SunriseSunsetComponent'
import './WeatherHighligthsContainer.sass'


const WeatherHighlightsContainer: React.FC<any> = ({data}) => {
  return(
    <div className="weather-highlights-container">
      <WindComponent windSpeed={data.windSpeed} windDeg={data.windDeg} />
      <SunriseSunsetComponent sunrise={data.sunrise} sunset={data.sunset} />

    </div>
  )
}

export default WeatherHighlightsContainer
