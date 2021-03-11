import React from 'react'
import './PressureComponent.sass'

type PressureProps = {
  pressure: number
}

export function PressureComponent({pressure}: PressureProps) {
  return (
    <div className="pressure-component">
      <div className="pressure-component-title">
        <span>Pressure</span>
      </div>
      <div className="pressure-value">
        <span>{pressure} hPa</span>
      </div>
    </div>
  )
}