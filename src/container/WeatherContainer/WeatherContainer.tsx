import React, { useEffect, useState } from 'react'
import {
  fetchWeatherDataWithCoords,
  fetchWeatherDataWithUserDefinedCity7Days,
  IntialWeatherDataResponse,
  WeatherDataResponse
} from '../../api/fetchWeatherDataWithCoords'

import * as moment from 'moment'
import Button from 'react-bootstrap/Button'
import './WeatherContainer.sass'
import WeatherComponent from '../../component/WeatherComponent/WeatherComponent'

const userInputRegex = new RegExp('^[a-zA-Z]+$')

export const WeatherContainer: React.FC = () => {

  const [weatherData, setWeatherData] = useState<WeatherDataResponse[]>(IntialWeatherDataResponse)
  const [userDefinedCity, setUserDefinedCity] = useState<string>('')
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
      })
      .then(() => setWeatherDataReady(true))
  }

  const geolocationDenied = () => {
    setWeatherDataReady(false)
  }


  const convertUnixTimestampToDate = (timestamp: number) => {
    return moment.unix(timestamp).format("DD MMM YYYY hh:mm a")
  }

  const prepareWeatherData = (response: any) => {
    return response.daily.map((element: any) => {
      return {
        dateTime: convertUnixTimestampToDate(element.dt),
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

  const CityInput = () => {
    return (
      <div className="city-input">
        <input
          value={userDefinedCity}
          onChange={checkRegexExpression}
          placeholder="Your City"
        />
        <Button onClick={onButtonClick}>Send</Button>
      </div>)
  }

  const checkRegexExpression = (inputElement: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = inputElement.target.value

    if (!value) {
      setUserDefinedCity('')
    } else if (userInputRegex.test(value)) {
      setUserDefinedCity(value)
    }
  }

  const onButtonClick = () => {
    userDefinedCity && fetchWeatherDataWithUserDefinedCity7Days()
      .then(result => {
        setWeatherData(prepareWeatherData(result))
        setWeatherDataReady(true)
      })
  }

  return <div className="weather-container">

    <div className="weather-header">
      <h1>React Weather Application</h1>
    </div>

    {!weatherDataReady &&
    CityInput()}

    {weatherDataReady &&
    weatherData.map((weather) => {
      return <WeatherComponent data={weather}/>
    })
    }
  </div>
}

export default WeatherContainer
