import {createServer} from "miragejs"


  createServer({
    routes() {
      this.get("/api/getCoordinates",
        () => [
            {
              "name": "Katowice",
              "local_names": {
                "af": "Katowice",
                "ar": "كاتوفيتسه",
                "ascii": "Katowice",
                "bg": "Катовице",
                "ca": "Katowice",
                "da": "Katowice",
                "de": "Kattowitz",
                "el": "Κατοβίτσε",
                "en": "Katowice",
                "eu": "Katowice",
                "fa": "کاتوویتس",
                "feature_name": "Katowice",
                "fi": "Katowice",
                "fr": "Katowice",
                "gl": "Katowice",
                "he": "קטוביץ",
                "hr": "Katowice",
                "hu": "Katowice",
                "id": "Katowice",
                "it": "Katowice",
                "ja": "カトヴィツェ",
                "la": "Katovicum",
                "lt": "Katovicai",
                "mk": "Катовице",
                "nl": "Katowice",
                "no": "Katowice",
                "pl": "Katowice",
                "pt": "Katowice",
                "ro": "Katowice",
                "ru": "Катовице",
                "se": "Katowice",
                "sk": "Katovice",
                "sl": "Katovice",
                "sr": "Катовице",
                "th": "คะโตวิตซ",
                "tr": "Katowice",
                "vi": "Katowice"
              },
              "lat": 50.2584,
              "lon": 19.0275,
              "country": "PL"
            }
          ]
        )

      this.get("/api/getWeather",
        () => {
          return {
            "lat": 50.2584,
            "lon": 19.0275,
            "timezone": "Europe/Warsaw",
            "timezone_offset": 3600,
            "current": {
              "dt": 1614192993,
              "sunrise": 1614145072,
              "sunset": 1614183401,
              "temp": 7.47,
              "feels_like": 6.09,
              "pressure": 1032,
              "humidity": 86,
              "dew_point": 5.28,
              "uvi": 1,
              "clouds": 57,
              "visibility": 10000,
              "wind_speed": 0.45,
              "wind_deg": 246,
              "wind_gust": 1.34,
              "weather": [
                {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
                }
              ]
            },
            "hourly": [
              {
                "dt": 1614189600,
                "temp": 7.47,
                "feels_like": 4.7,
                "pressure": 1032,
                "humidity": 86,
                "dew_point": 5.28,
                "uvi": 0,
                "clouds": 57,
                "visibility": 10000,
                "wind_speed": 2.43,
                "wind_deg": 223,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614193200,
                "temp": 8.24,
                "feels_like": 5.5,
                "pressure": 1032,
                "humidity": 79,
                "dew_point": 4.82,
                "uvi": 0,
                "clouds": 77,
                "visibility": 10000,
                "wind_speed": 2.26,
                "wind_deg": 216,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614196800,
                "temp": 8.2,
                "feels_like": 5.63,
                "pressure": 1033,
                "humidity": 82,
                "dew_point": 5.31,
                "uvi": 0,
                "clouds": 74,
                "visibility": 10000,
                "wind_speed": 2.16,
                "wind_deg": 217,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614200400,
                "temp": 7.9,
                "feels_like": 5.11,
                "pressure": 1033,
                "humidity": 82,
                "dew_point": 5.02,
                "uvi": 0,
                "clouds": 54,
                "visibility": 10000,
                "wind_speed": 2.39,
                "wind_deg": 219,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614204000,
                "temp": 7.48,
                "feels_like": 4.34,
                "pressure": 1034,
                "humidity": 81,
                "dew_point": 4.44,
                "uvi": 0,
                "clouds": 41,
                "visibility": 10000,
                "wind_speed": 2.72,
                "wind_deg": 224,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614207600,
                "temp": 7.14,
                "feels_like": 3.89,
                "pressure": 1034,
                "humidity": 80,
                "dew_point": 3.95,
                "uvi": 0,
                "clouds": 32,
                "visibility": 10000,
                "wind_speed": 2.74,
                "wind_deg": 231,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614211200,
                "temp": 6.65,
                "feels_like": 3.59,
                "pressure": 1033,
                "humidity": 81,
                "dew_point": 3.7,
                "uvi": 0,
                "clouds": 26,
                "visibility": 10000,
                "wind_speed": 2.38,
                "wind_deg": 234,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614214800,
                "temp": 6.22,
                "feels_like": 3.29,
                "pressure": 1033,
                "humidity": 83,
                "dew_point": 3.65,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.18,
                "wind_deg": 223,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614218400,
                "temp": 5.98,
                "feels_like": 3.05,
                "pressure": 1033,
                "humidity": 83,
                "dew_point": 3.47,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.12,
                "wind_deg": 217,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614222000,
                "temp": 5.79,
                "feels_like": 2.82,
                "pressure": 1032,
                "humidity": 82,
                "dew_point": 3.07,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.09,
                "wind_deg": 214,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614225600,
                "temp": 5.56,
                "feels_like": 2.64,
                "pressure": 1033,
                "humidity": 80,
                "dew_point": 2.55,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.87,
                "wind_deg": 215,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614229200,
                "temp": 5.31,
                "feels_like": 2.46,
                "pressure": 1032,
                "humidity": 79,
                "dew_point": 2.08,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.67,
                "wind_deg": 214,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614232800,
                "temp": 5.19,
                "feels_like": 2.29,
                "pressure": 1032,
                "humidity": 78,
                "dew_point": 1.75,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.68,
                "wind_deg": 212,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614236400,
                "temp": 6.21,
                "feels_like": 3.26,
                "pressure": 1032,
                "humidity": 73,
                "dew_point": 1.92,
                "uvi": 0.4,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.76,
                "wind_deg": 208,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614240000,
                "temp": 8.17,
                "feels_like": 5.19,
                "pressure": 1032,
                "humidity": 66,
                "dew_point": 2.21,
                "uvi": 0.92,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.91,
                "wind_deg": 213,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614243600,
                "temp": 10.12,
                "feels_like": 6.92,
                "pressure": 1031,
                "humidity": 58,
                "dew_point": 2.34,
                "uvi": 1.54,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.24,
                "wind_deg": 214,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614247200,
                "temp": 11.69,
                "feels_like": 8.49,
                "pressure": 1031,
                "humidity": 53,
                "dew_point": 2.68,
                "uvi": 2.02,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.29,
                "wind_deg": 212,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614250800,
                "temp": 12.97,
                "feels_like": 9.84,
                "pressure": 1031,
                "humidity": 50,
                "dew_point": 2.89,
                "uvi": 2.11,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.28,
                "wind_deg": 215,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614254400,
                "temp": 13.91,
                "feels_like": 10.68,
                "pressure": 1030,
                "humidity": 48,
                "dew_point": 3.26,
                "uvi": 1.82,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.49,
                "wind_deg": 220,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614258000,
                "temp": 14.36,
                "feels_like": 10.9,
                "pressure": 1029,
                "humidity": 49,
                "dew_point": 3.81,
                "uvi": 1.25,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3,
                "wind_deg": 228,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614261600,
                "temp": 14.24,
                "feels_like": 10.61,
                "pressure": 1029,
                "humidity": 52,
                "dew_point": 4.6,
                "uvi": 0.63,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.45,
                "wind_deg": 232,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614265200,
                "temp": 13.56,
                "feels_like": 9.94,
                "pressure": 1028,
                "humidity": 55,
                "dew_point": 4.94,
                "uvi": 0.21,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.48,
                "wind_deg": 237,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614268800,
                "temp": 11.94,
                "feels_like": 8.04,
                "pressure": 1028,
                "humidity": 62,
                "dew_point": 4.91,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.94,
                "wind_deg": 240,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614272400,
                "temp": 10.9,
                "feels_like": 6.65,
                "pressure": 1029,
                "humidity": 66,
                "dew_point": 4.82,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.41,
                "wind_deg": 242,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614276000,
                "temp": 10.49,
                "feels_like": 5.97,
                "pressure": 1029,
                "humidity": 67,
                "dew_point": 4.74,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.75,
                "wind_deg": 240,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614279600,
                "temp": 10.03,
                "feels_like": 5.47,
                "pressure": 1029,
                "humidity": 69,
                "dew_point": 4.76,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.8,
                "wind_deg": 240,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614283200,
                "temp": 9.6,
                "feels_like": 5.24,
                "pressure": 1030,
                "humidity": 72,
                "dew_point": 4.85,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.57,
                "wind_deg": 241,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614286800,
                "temp": 9.06,
                "feels_like": 4.92,
                "pressure": 1029,
                "humidity": 75,
                "dew_point": 4.93,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.27,
                "wind_deg": 239,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614290400,
                "temp": 8.6,
                "feels_like": 4.56,
                "pressure": 1030,
                "humidity": 77,
                "dew_point": 4.97,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.11,
                "wind_deg": 242,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614294000,
                "temp": 8.19,
                "feels_like": 4.28,
                "pressure": 1030,
                "humidity": 80,
                "dew_point": 4.97,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.96,
                "wind_deg": 243,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614297600,
                "temp": 7.68,
                "feels_like": 4.07,
                "pressure": 1030,
                "humidity": 83,
                "dew_point": 4.99,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.54,
                "wind_deg": 242,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614301200,
                "temp": 7.1,
                "feels_like": 3.73,
                "pressure": 1029,
                "humidity": 85,
                "dew_point": 4.9,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.14,
                "wind_deg": 242,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614304800,
                "temp": 6.56,
                "feels_like": 3.35,
                "pressure": 1029,
                "humidity": 87,
                "dew_point": 4.67,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.85,
                "wind_deg": 242,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614308400,
                "temp": 6.06,
                "feels_like": 2.99,
                "pressure": 1029,
                "humidity": 88,
                "dew_point": 4.38,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.56,
                "wind_deg": 246,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614312000,
                "temp": 5.71,
                "feels_like": 2.78,
                "pressure": 1029,
                "humidity": 89,
                "dew_point": 4.14,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.31,
                "wind_deg": 249,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614315600,
                "temp": 5.43,
                "feels_like": 2.62,
                "pressure": 1029,
                "humidity": 89,
                "dew_point": 3.87,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.07,
                "wind_deg": 245,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614319200,
                "temp": 5.27,
                "feels_like": 2.55,
                "pressure": 1029,
                "humidity": 89,
                "dew_point": 3.7,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.89,
                "wind_deg": 250,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614322800,
                "temp": 6.27,
                "feels_like": 3.8,
                "pressure": 1029,
                "humidity": 85,
                "dew_point": 4.07,
                "uvi": 0.41,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.63,
                "wind_deg": 253,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614326400,
                "temp": 8.03,
                "feels_like": 5.48,
                "pressure": 1029,
                "humidity": 77,
                "dew_point": 4.3,
                "uvi": 0.95,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.82,
                "wind_deg": 265,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614330000,
                "temp": 9.57,
                "feels_like": 7.05,
                "pressure": 1028,
                "humidity": 70,
                "dew_point": 4.52,
                "uvi": 1.58,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.81,
                "wind_deg": 263,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614333600,
                "temp": 10.96,
                "feels_like": 8.46,
                "pressure": 1028,
                "humidity": 66,
                "dew_point": 5.04,
                "uvi": 2.07,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.93,
                "wind_deg": 274,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614337200,
                "temp": 11.98,
                "feels_like": 9.59,
                "pressure": 1027,
                "humidity": 65,
                "dew_point": 5.74,
                "uvi": 2.16,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.99,
                "wind_deg": 279,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614340800,
                "temp": 12.68,
                "feels_like": 10.28,
                "pressure": 1027,
                "humidity": 64,
                "dew_point": 6.21,
                "uvi": 1.86,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 2.13,
                "wind_deg": 286,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614344400,
                "temp": 12.95,
                "feels_like": 10.58,
                "pressure": 1026,
                "humidity": 64,
                "dew_point": 6.51,
                "uvi": 1.2,
                "clouds": 10,
                "visibility": 10000,
                "wind_speed": 2.16,
                "wind_deg": 292,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614348000,
                "temp": 12.72,
                "feels_like": 10.24,
                "pressure": 1026,
                "humidity": 66,
                "dew_point": 6.61,
                "uvi": 0.62,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 2.39,
                "wind_deg": 297,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614351600,
                "temp": 11.89,
                "feels_like": 9.5,
                "pressure": 1026,
                "humidity": 71,
                "dew_point": 6.86,
                "uvi": 0.21,
                "clouds": 54,
                "visibility": 10000,
                "wind_speed": 2.35,
                "wind_deg": 306,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614355200,
                "temp": 10.46,
                "feels_like": 7.88,
                "pressure": 1026,
                "humidity": 79,
                "dew_point": 7.07,
                "uvi": 0,
                "clouds": 64,
                "visibility": 10000,
                "wind_speed": 2.68,
                "wind_deg": 315,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1614358800,
                "temp": 9.51,
                "feels_like": 6.6,
                "pressure": 1026,
                "humidity": 85,
                "dew_point": 7.14,
                "uvi": 0,
                "clouds": 72,
                "visibility": 10000,
                "wind_speed": 3.19,
                "wind_deg": 326,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0.01
              }
            ],
            "daily": [
              {
                "dt": 1614160800,
                "sunrise": 1614145072,
                "sunset": 1614183401,
                "temp": {
                  "day": 11.18,
                  "min": 4.55,
                  "max": 14.52,
                  "night": 7.48,
                  "eve": 11.46,
                  "morn": 4.71
                },
                "feels_like": {
                  "day": 8.42,
                  "night": 4.34,
                  "eve": 8.9,
                  "morn": 1.33
                },
                "pressure": 1035,
                "humidity": 58,
                "dew_point": 3.28,
                "wind_speed": 1.85,
                "wind_deg": 223,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "clouds": 8,
                "pop": 0,
                "uvi": 1.87
              },
              {
                "dt": 1614247200,
                "sunrise": 1614231352,
                "sunset": 1614269903,
                "temp": {
                  "day": 11.69,
                  "min": 5.19,
                  "max": 14.36,
                  "night": 8.6,
                  "eve": 11.94,
                  "morn": 5.56
                },
                "feels_like": {
                  "day": 8.49,
                  "night": 4.56,
                  "eve": 8.04,
                  "morn": 2.64
                },
                "pressure": 1031,
                "humidity": 53,
                "dew_point": 2.68,
                "wind_speed": 2.29,
                "wind_deg": 212,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "clouds": 0,
                "pop": 0,
                "uvi": 2.11
              },
              {
                "dt": 1614333600,
                "sunrise": 1614317630,
                "sunset": 1614356404,
                "temp": {
                  "day": 10.96,
                  "min": 5.27,
                  "max": 12.95,
                  "night": 6.06,
                  "eve": 10.46,
                  "morn": 5.71
                },
                "feels_like": {
                  "day": 8.46,
                  "night": 1.26,
                  "eve": 7.88,
                  "morn": 2.78
                },
                "pressure": 1028,
                "humidity": 66,
                "dew_point": 5.04,
                "wind_speed": 1.93,
                "wind_deg": 274,
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": 0,
                "pop": 0.89,
                "rain": 1.32,
                "uvi": 2.16
              },
              {
                "dt": 1614420000,
                "sunrise": 1614403908,
                "sunset": 1614442906,
                "temp": {
                  "day": 2.7,
                  "min": 2.7,
                  "max": 5.16,
                  "night": 3.09,
                  "eve": 3.26,
                  "morn": 4.05
                },
                "feels_like": {
                  "day": -2.66,
                  "night": -0.44,
                  "eve": -1.49,
                  "morn": -0.63
                },
                "pressure": 1031,
                "humidity": 85,
                "dew_point": 0.59,
                "wind_speed": 4.92,
                "wind_deg": 316,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": 99,
                "pop": 0.8,
                "uvi": 0.47
              },
              {
                "dt": 1614506400,
                "sunrise": 1614490185,
                "sunset": 1614529407,
                "temp": {
                  "day": 2.37,
                  "min": 1.46,
                  "max": 5.56,
                  "night": 1.53,
                  "eve": 5.56,
                  "morn": 1.78
                },
                "feels_like": {
                  "day": -1.14,
                  "night": -1.21,
                  "eve": 2.11,
                  "morn": -2.14
                },
                "pressure": 1034,
                "humidity": 81,
                "dew_point": -1.75,
                "wind_speed": 2.06,
                "wind_deg": 314,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": 99,
                "pop": 0,
                "uvi": 1.64
              },
              {
                "dt": 1614592800,
                "sunrise": 1614576461,
                "sunset": 1614615907,
                "temp": {
                  "day": 4.87,
                  "min": 0.53,
                  "max": 6.92,
                  "night": 2.66,
                  "eve": 6.52,
                  "morn": 0.53
                },
                "feels_like": {
                  "day": 2.53,
                  "night": -0.31,
                  "eve": 2.79,
                  "morn": -1.68
                },
                "pressure": 1038,
                "humidity": 69,
                "dew_point": -0.75,
                "wind_speed": 0.44,
                "wind_deg": 350,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                  }
                ],
                "clouds": 11,
                "pop": 0,
                "uvi": 1.76
              },
              {
                "dt": 1614679200,
                "sunrise": 1614662736,
                "sunset": 1614702408,
                "temp": {
                  "day": 5.66,
                  "min": 1.03,
                  "max": 9.58,
                  "night": 4.55,
                  "eve": 9.58,
                  "morn": 1.14
                },
                "feels_like": {
                  "day": 2.76,
                  "night": 1.07,
                  "eve": 6.66,
                  "morn": -1.68
                },
                "pressure": 1038,
                "humidity": 66,
                "dew_point": -0.64,
                "wind_speed": 1.26,
                "wind_deg": 193,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "clouds": 0,
                "pop": 0,
                "uvi": 2
              },
              {
                "dt": 1614765600,
                "sunrise": 1614749010,
                "sunset": 1614788908,
                "temp": {
                  "day": 7.54,
                  "min": 2.04,
                  "max": 10.46,
                  "night": 5.84,
                  "eve": 9.86,
                  "morn": 2.47
                },
                "feels_like": {
                  "day": 2.15,
                  "night": 1.78,
                  "eve": 4.69,
                  "morn": -1.39
                },
                "pressure": 1032,
                "humidity": 58,
                "dew_point": -0.73,
                "wind_speed": 4.82,
                "wind_deg": 232,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "clouds": 0,
                "pop": 0,
                "uvi": 2
              }
            ]
          }
        }
      )
    }
  })
