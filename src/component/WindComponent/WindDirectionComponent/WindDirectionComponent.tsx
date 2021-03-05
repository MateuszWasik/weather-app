import React from 'react'
import DegreeConverter from '../../DegreeConverter/DegreeConverter'
import { ReactComponent as DirectionArrow } from '../../../assets/WeatherIcons/compass.svg'

type Props = {
  degrees: number
}

const WindDirectionComponent: React.FC<Props> = ({degrees}: Props) => {
  return(
    <span className="wind-direction">
      <DirectionArrow /> {DegreeConverter(degrees)}
    </span>
  )
}

export default WindDirectionComponent
