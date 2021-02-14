import React, { useEffect, useState } from 'react'
import {
  fetchWeatherDataWithCoords,
  IntialWeatherDataResponse,
  WeatherDataResponse
} from '../../api/fetchWeatherDataWithCoords'

import * as moment from 'moment'
import './WeatherContainer.sass'
import WeatherComponent from '../../component/WeatherComponent/WeatherComponent'

export const WeatherContainer: React.FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherDataResponse[]>(IntialWeatherDataResponse)
  const [weatherDataReady, setWeatherDataReady] = useState<boolean>(false)

  useEffect(() => {
    checkGeolocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchDataFromLocation, geolocationDenied)
    } else {
      //to be implemented
      return null
    }
  }

  const fetchDataFromLocation = (position: Position) => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    }

    fetchWeatherDataWithCoords(location)
      .then(weatherDataResponse => {
        setWeatherData(prepareWeatherData(weatherDataResponse))
        setWeatherDataReady(true)
      })
  }

  const geolocationDenied = () => {
    setWeatherDataReady(false)
  }


  const convertUnixTimestampToDate = (timestamp: number) => {
    return moment.unix(timestamp).format("DD MMM YYYY")
  }

  const prepareWeatherData = (response: any) => {
    return response.daily.map((element: any) => {
      return {
        date: convertUnixTimestampToDate(element.dt),
        weather: element.weather[0].main,
        weatherDescription: element.weather[0].description,
        temperature: Math.round(element.temp.day),
        tempFeelsLike: element.feels_like.day,
        minTemperature: Math.round(element.temp.min),
        maxTemperature: Math.round(element.temp.max),
        pressure: element.pressure,
        humidity: element.humidity,
        windSpeed: Math.round(element.wind_seed),
        sunrise: convertUnixTimestampToDate(element.sunrise),
        sunset: convertUnixTimestampToDate(element.sunset),
        icon: element.weather[0].icon
      }
    })
  }

  return <div className="weather-container">

    <div className="weather-header">
      <h1>React Weather Application</h1>
    </div>

    {weatherDataReady &&
    <div className="weather-blocks">
      {weatherData.map((weather, index) => {
        return <WeatherComponent
          key={index}
          data={weather}
        />
      })
      }
    </div>
    }
  </div>
}

export default WeatherContainer
