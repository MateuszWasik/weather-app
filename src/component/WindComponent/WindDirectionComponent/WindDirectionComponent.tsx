import React from 'react'
import DegreeConverter from '../../DegreeConverter/DegreeConverter'

type Props = {
  degrees: number
}

const WindDirectionComponent: React.FC<Props> = ({degrees}: Props) => {
  return(
    <span className="wind-direction">
      {DegreeConverter(degrees)}
    </span>
  )
}

export default WindDirectionComponent
