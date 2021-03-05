import './WindComponent.sass'
import React from 'react'
import WindDirectionComponent from './WindDirectionComponent/WindDirectionComponent'

type Props = {
  windSpeed: number
  windDeg: number
}

const WindComponent: React.FC<Props> = ({windSpeed, windDeg}) => {

  return (
    <div className="wind-component">
      <div className="wind-component-title">
        <span>Wind status</span>
      </div>
      <div className="wind-details">
        <span className="wind-speed">{windSpeed} km/h</span>
        <WindDirectionComponent degrees={windDeg}/>
      </div>

    </div>
  )
}

export default WindComponent
