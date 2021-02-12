import React from 'react'
import { WeatherIconFactory } from '../WeatherIconFactory/WeatherIconFactory'


export const WeatherIconComponent = (icon: any) => {
  const iconUsed = WeatherIconFactory(icon)
  return (
    <>
      {iconUsed}
    </>
  )
}
