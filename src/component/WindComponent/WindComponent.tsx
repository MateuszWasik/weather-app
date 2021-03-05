import './WindComponent.sass'
import React from 'react'
import WindDirectionComponent from './WindDirectionComponent/WindDirectionComponent'

type Props = {
  windSpeed: number
  windDeg: number
  windGust: number
}

const WindComponent: React.FC<Props> = ({windSpeed, windDeg, windGust}) => {

  return (
    <div className="wind-component">
      <div className="wind-component-title">
        <span>Wind status</span>
      </div>
      <div className="wind-details">
        <span className="wind-speed">{windSpeed} km/h</span>
        <span className="wind-gust">{windGust} km/h</span>
        <WindDirectionComponent degrees={windDeg}/>
      </div>

    </div>
  )
}

export default WindComponent
