import React from 'react'
import { WeatherIconFactory } from '../WeatherIconFactory/WeatherIconFactory'


export const WeatherIconComponent = (icon: any) => {
  return (
    <>
      {WeatherIconFactory(icon)}
    </>
  )
}
