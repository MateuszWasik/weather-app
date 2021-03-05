import React from 'react'
import WindComponent from 'component/WindComponent/WindComponent'


const WeatherHighlightsContainer: React.FC<any> = ({data}) => {
  return(
    <div className="weather-highlights-container">
      <WindComponent windSpeed={data.windSpeed} windDeg={data.windDeg} />

    </div>
  )
}

export default WeatherHighlightsContainer
