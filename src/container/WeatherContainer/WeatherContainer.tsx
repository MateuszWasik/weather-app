import React, { useState } from 'react'
import {
  fetchGeocodingCoordinates,
  fetchWeatherDataWithUserDefinedCity,
  GeocodingLocation,
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

  const convertUnixTimestampToDate = (timestamp: number, format = "DD MMM YYYY hh:mm a") => {
    return moment.unix(timestamp).format(format)
  }

  const prepareWeatherData = (response: any) => {
    return response.daily.map((element: any) => {
      return {
        date: convertUnixTimestampToDate(element.dt, "DD MMM YYYY"),
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

  const prepareGeolocationData = (geocodingResponse: any) => {
    return {
      latitude: geocodingResponse[0].lat,
      longitude: geocodingResponse[0].lon
    } as GeocodingLocation
  }

  const prepareAndSetWeatherInformation = () => {
    userDefinedCity && fetchGeocodingCoordinates(userDefinedCity)
      .then(result => {
        return prepareGeolocationData(result)
      })
      .then(result => {
        fetchWeatherDataWithUserDefinedCity(result)
          .then(result => {
            setWeatherData(prepareWeatherData(result))
            setWeatherDataReady(true)
          })
      })
  }

  const onButtonClick = () => {
    prepareAndSetWeatherInformation()
  }

  return <div className="weather-container">

    <div className="weather-header">
      <h1>React Weather Application</h1>
    </div>

    {!weatherDataReady &&
    CityInput()}

    {weatherDataReady &&
    <div className="weather-blocks">
      {weatherData.map((weather) => {
        return <WeatherComponent data={weather}/>
      })
      }
    </div>
    }
  </div>
}

export default WeatherContainer
