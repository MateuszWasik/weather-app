import {ReactComponent as BrokenClouds} from '../../assets/WeatherIcons/broken-clouds.svg'
import {ReactComponent as ClearNight} from '../../assets/WeatherIcons/clear-night.svg'
import {ReactComponent as ClearSky} from '../../assets/WeatherIcons/clear-sky.svg'
import {ReactComponent as Cloudy} from '../../assets/WeatherIcons/cloudy.svg'
import {ReactComponent as FewCloudsNight} from '../../assets/WeatherIcons/cloudy-night.svg'
import {ReactComponent as Fog} from '../../assets/WeatherIcons/fog.svg'
import {ReactComponent as Thunderstorm} from '../../assets/WeatherIcons/thunderstorm.svg'
import {ReactComponent as RainyDay} from '../../assets/WeatherIcons/rainy-day.svg'
import {ReactComponent as RainyNight} from '../../assets/WeatherIcons/rainy-night.svg'
import {ReactComponent as Snowy} from '../../assets/WeatherIcons/snowy.svg'
import {ReactComponent as SnowyNight} from '../../assets/WeatherIcons/snowy-night.svg'
import {ReactComponent as FewClouds} from '../../assets/WeatherIcons/small-cloud.svg'
import React from 'react'


export const WeatherIconFactory = (icon: any) => {
  switch (icon.icon) {
    case '01d':
      return <ClearSky />
    case '01n':
      return <ClearNight />
    case '02d':
      return <FewClouds />
    case '02n':
      return <FewCloudsNight />
    case '03d':
      return <Cloudy />
    case '03n':
      return <Cloudy />
    case '04d':
      return <BrokenClouds />
    case '04n':
      return <BrokenClouds />
    case '09d':
      return <RainyDay />
    case '09n':
      return <RainyNight />
    case '10d':
      return <RainyDay />
    case '10n':
      return <RainyNight />
    case '11d':
      return <Thunderstorm />
    case '11n':
      return <Thunderstorm />
    case '13d':
      return <Snowy />
    case '13n':
      return <SnowyNight />
    case '50d':
      return <Fog />
    case '50n':
      return <Fog />
    default:
      return null
  }
}
