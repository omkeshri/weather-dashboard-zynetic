// https://api.openweathermap.org/data/2.5/weather?q=phagwara&appid=1a65ca96b19ff48991458fcae57fccd3&units=metric

import { LuWind } from "react-icons/lu";
import { PiThermometer } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
export const API_DATA = {
    "coord": {
        "lon": 75.7694,
        "lat": 31.2178
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 25.92,
        "feels_like": 24.72,
        "temp_min": 25.92,
        "temp_max": 25.92,
        "pressure": 1007,
        "humidity": 6,
        "sea_level": 1007,
        "grnd_level": 980
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.74,
        "deg": 297,
        "gust": 5.06
    },
    "clouds": {
        "all": 0
    },
    "dt": 1743252504,
    "sys": {
        "country": "IN",
        "sunrise": 1743209372,
        "sunset": 1743254020
    },
    "timezone": 19800,
    "id": 1259827,
    "name": "Phagwāra",
    "cod": 200
}


export const weatherStatsProps = [
    {
      icon: <PiThermometer />,
      label: "FEELS LIKE",
      value: API_DATA.main.feels_like,
      unit: "°C",
      description: "Humidity is making it feel warmer",
    },
    {
      icon: <LuWind />,
      label: "WIND SPEED",
      value: API_DATA.wind.speed,
      unit: "MPH",
      description: "Current wind speed",
    },
    {
      icon: <FaRegEye />,
      label: "VISIBILITY",
      value: API_DATA.visibility / 1000, // Convert meters to km
      unit: "km",
      description: "Distance you can see clearly",
    },
    {
      icon: <WiHumidity />,
      label: "HUMIDITY",
      value: API_DATA.main.humidity,
      unit: "%",
      description: "Moisture level in the air",
    },
  ];



export const FIVE_DAY = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1743260400,
            "main": {
                "temp": 293.89,
                "feels_like": 292.23,
                "temp_min": 293.89,
                "temp_max": 293.89,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 982,
                "humidity": 8,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 3.56,
                "deg": 315,
                "gust": 3.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-29 15:00:00"
        },
        {
            "dt": 1743271200,
            "main": {
                "temp": 292.68,
                "feels_like": 290.95,
                "temp_min": 290.27,
                "temp_max": 292.68,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 983,
                "humidity": 10,
                "temp_kf": 2.41
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 3.93,
                "deg": 325,
                "gust": 8.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-29 18:00:00"
        },
        {
            "dt": 1743282000,
            "main": {
                "temp": 290.26,
                "feels_like": 288.42,
                "temp_min": 288.45,
                "temp_max": 290.26,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 982,
                "humidity": 15,
                "temp_kf": 1.81
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 3.51,
                "deg": 341,
                "gust": 5.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-29 21:00:00"
        },
        {
            "dt": 1743292800,
            "main": {
                "temp": 287.21,
                "feels_like": 285.25,
                "temp_min": 287.21,
                "temp_max": 287.21,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 982,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 82
            },
            "wind": {
                "speed": 3.06,
                "deg": 329,
                "gust": 3.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-30 00:00:00"
        },
        {
            "dt": 1743303600,
            "main": {
                "temp": 294.82,
                "feels_like": 293.43,
                "temp_min": 294.82,
                "temp_max": 294.82,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 984,
                "humidity": 15,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 39
            },
            "wind": {
                "speed": 3.3,
                "deg": 327,
                "gust": 4.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-30 03:00:00"
        },
        {
            "dt": 1743314400,
            "main": {
                "temp": 304.28,
                "feels_like": 302.3,
                "temp_min": 304.28,
                "temp_max": 304.28,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 984,
                "humidity": 6,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 22
            },
            "wind": {
                "speed": 5.18,
                "deg": 316,
                "gust": 6.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-30 06:00:00"
        },
        {
            "dt": 1743325200,
            "main": {
                "temp": 307.7,
                "feels_like": 305.11,
                "temp_min": 307.7,
                "temp_max": 307.7,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 981,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 5.05,
                "deg": 315,
                "gust": 5.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-30 09:00:00"
        },
        {
            "dt": 1743336000,
            "main": {
                "temp": 306.27,
                "feels_like": 303.92,
                "temp_min": 306.27,
                "temp_max": 306.27,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 980,
                "humidity": 6,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 4.51,
                "deg": 312,
                "gust": 5.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-30 12:00:00"
        },
        {
            "dt": 1743346800,
            "main": {
                "temp": 295.52,
                "feels_like": 294.1,
                "temp_min": 295.52,
                "temp_max": 295.52,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 982,
                "humidity": 11,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.93,
                "deg": 333,
                "gust": 3.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-30 15:00:00"
        },
        {
            "dt": 1743357600,
            "main": {
                "temp": 293.09,
                "feels_like": 291.53,
                "temp_min": 293.09,
                "temp_max": 293.09,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 983,
                "humidity": 15,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.22,
                "deg": 34,
                "gust": 2.29
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-30 18:00:00"
        },
        {
            "dt": 1743368400,
            "main": {
                "temp": 291.61,
                "feels_like": 289.96,
                "temp_min": 291.61,
                "temp_max": 291.61,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 982,
                "humidity": 17,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.37,
                "deg": 18,
                "gust": 2.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-30 21:00:00"
        },
        {
            "dt": 1743379200,
            "main": {
                "temp": 289.78,
                "feels_like": 287.99,
                "temp_min": 289.78,
                "temp_max": 289.78,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 983,
                "humidity": 19,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.58,
                "deg": 342,
                "gust": 1.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-31 00:00:00"
        },
        {
            "dt": 1743390000,
            "main": {
                "temp": 298.98,
                "feels_like": 297.91,
                "temp_min": 298.98,
                "temp_max": 298.98,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 984,
                "humidity": 11,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.09,
                "deg": 14,
                "gust": 2.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-31 03:00:00"
        },
        {
            "dt": 1743400800,
            "main": {
                "temp": 307.63,
                "feels_like": 305.03,
                "temp_min": 307.63,
                "temp_max": 307.63,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 983,
                "humidity": 6,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.56,
                "deg": 320,
                "gust": 3.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-31 06:00:00"
        },
        {
            "dt": 1743411600,
            "main": {
                "temp": 309.68,
                "feels_like": 306.7,
                "temp_min": 309.68,
                "temp_max": 309.68,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 980,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.13,
                "deg": 318,
                "gust": 4.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-31 09:00:00"
        },
        {
            "dt": 1743422400,
            "main": {
                "temp": 308.11,
                "feels_like": 305.44,
                "temp_min": 308.11,
                "temp_max": 308.11,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 979,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.51,
                "deg": 338,
                "gust": 5.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-03-31 12:00:00"
        },
        {
            "dt": 1743433200,
            "main": {
                "temp": 295.93,
                "feels_like": 294.6,
                "temp_min": 295.93,
                "temp_max": 295.93,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 981,
                "humidity": 13,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.15,
                "deg": 10,
                "gust": 3.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-31 15:00:00"
        },
        {
            "dt": 1743444000,
            "main": {
                "temp": 293.17,
                "feels_like": 291.7,
                "temp_min": 293.17,
                "temp_max": 293.17,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 982,
                "humidity": 18,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.66,
                "deg": 346,
                "gust": 2.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-31 18:00:00"
        },
        {
            "dt": 1743454800,
            "main": {
                "temp": 291.97,
                "feels_like": 290.4,
                "temp_min": 291.97,
                "temp_max": 291.97,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 980,
                "humidity": 19,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.26,
                "deg": 7,
                "gust": 2.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-03-31 21:00:00"
        },
        {
            "dt": 1743465600,
            "main": {
                "temp": 291.04,
                "feels_like": 289.38,
                "temp_min": 291.04,
                "temp_max": 291.04,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 980,
                "humidity": 19,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.93,
                "deg": 359,
                "gust": 1.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-01 00:00:00"
        },
        {
            "dt": 1743476400,
            "main": {
                "temp": 299.49,
                "feels_like": 299.49,
                "temp_min": 299.49,
                "temp_max": 299.49,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 981,
                "humidity": 12,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.63,
                "deg": 313,
                "gust": 3.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-01 03:00:00"
        },
        {
            "dt": 1743487200,
            "main": {
                "temp": 308.15,
                "feels_like": 305.45,
                "temp_min": 308.15,
                "temp_max": 308.15,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 981,
                "humidity": 6,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.16,
                "deg": 306,
                "gust": 5.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-01 06:00:00"
        },
        {
            "dt": 1743498000,
            "main": {
                "temp": 310.15,
                "feels_like": 307.07,
                "temp_min": 310.15,
                "temp_max": 310.15,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 978,
                "humidity": 4,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.09,
                "deg": 305,
                "gust": 4.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-01 09:00:00"
        },
        {
            "dt": 1743508800,
            "main": {
                "temp": 308.25,
                "feels_like": 305.55,
                "temp_min": 308.25,
                "temp_max": 308.25,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 977,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.93,
                "deg": 311,
                "gust": 5.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-01 12:00:00"
        },
        {
            "dt": 1743519600,
            "main": {
                "temp": 297.57,
                "feels_like": 296.33,
                "temp_min": 297.57,
                "temp_max": 297.57,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 979,
                "humidity": 10,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.43,
                "deg": 347,
                "gust": 2.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-01 15:00:00"
        },
        {
            "dt": 1743530400,
            "main": {
                "temp": 294.25,
                "feels_like": 292.76,
                "temp_min": 294.25,
                "temp_max": 294.25,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 980,
                "humidity": 13,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.45,
                "deg": 350,
                "gust": 1.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-01 18:00:00"
        },
        {
            "dt": 1743541200,
            "main": {
                "temp": 293.69,
                "feels_like": 292.19,
                "temp_min": 293.69,
                "temp_max": 293.69,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 980,
                "humidity": 15,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.87,
                "deg": 44,
                "gust": 2.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-01 21:00:00"
        },
        {
            "dt": 1743552000,
            "main": {
                "temp": 292.42,
                "feels_like": 290.82,
                "temp_min": 292.42,
                "temp_max": 292.42,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 980,
                "humidity": 16,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.92,
                "deg": 75,
                "gust": 1.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-02 00:00:00"
        },
        {
            "dt": 1743562800,
            "main": {
                "temp": 300.68,
                "feels_like": 299.4,
                "temp_min": 300.68,
                "temp_max": 300.68,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 982,
                "humidity": 10,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.71,
                "deg": 305,
                "gust": 0.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-02 03:00:00"
        },
        {
            "dt": 1743573600,
            "main": {
                "temp": 310.57,
                "feels_like": 307.41,
                "temp_min": 310.57,
                "temp_max": 310.57,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 982,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.23,
                "deg": 309,
                "gust": 4.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-02 06:00:00"
        },
        {
            "dt": 1743584400,
            "main": {
                "temp": 311,
                "feels_like": 307.72,
                "temp_min": 311,
                "temp_max": 311,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 980,
                "humidity": 4,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 4.71,
                "deg": 314,
                "gust": 5.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-02 09:00:00"
        },
        {
            "dt": 1743595200,
            "main": {
                "temp": 309.55,
                "feels_like": 306.6,
                "temp_min": 309.55,
                "temp_max": 309.55,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 978,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.95,
                "deg": 317,
                "gust": 4.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-02 12:00:00"
        },
        {
            "dt": 1743606000,
            "main": {
                "temp": 298.31,
                "feels_like": 297.14,
                "temp_min": 298.31,
                "temp_max": 298.31,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 980,
                "humidity": 10,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 49
            },
            "wind": {
                "speed": 3.54,
                "deg": 30,
                "gust": 4.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-02 15:00:00"
        },
        {
            "dt": 1743616800,
            "main": {
                "temp": 296.6,
                "feels_like": 295.31,
                "temp_min": 296.6,
                "temp_max": 296.6,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 981,
                "humidity": 12,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 63
            },
            "wind": {
                "speed": 2.9,
                "deg": 55,
                "gust": 2.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-02 18:00:00"
        },
        {
            "dt": 1743627600,
            "main": {
                "temp": 294.62,
                "feels_like": 293.16,
                "temp_min": 294.62,
                "temp_max": 294.62,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 981,
                "humidity": 13,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 1.59,
                "deg": 61,
                "gust": 1.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-02 21:00:00"
        },
        {
            "dt": 1743638400,
            "main": {
                "temp": 294.03,
                "feels_like": 292.54,
                "temp_min": 294.03,
                "temp_max": 294.03,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 980,
                "humidity": 14,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 2.6,
                "deg": 88,
                "gust": 2.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-04-03 00:00:00"
        },
        {
            "dt": 1743649200,
            "main": {
                "temp": 301.67,
                "feels_like": 300.15,
                "temp_min": 301.67,
                "temp_max": 301.67,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 982,
                "humidity": 9,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 1.75,
                "deg": 98,
                "gust": 2.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-03 03:00:00"
        },
        {
            "dt": 1743660000,
            "main": {
                "temp": 309.42,
                "feels_like": 306.49,
                "temp_min": 309.42,
                "temp_max": 309.42,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 983,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 2.91,
                "deg": 113,
                "gust": 3.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-03 06:00:00"
        },
        {
            "dt": 1743670800,
            "main": {
                "temp": 312.04,
                "feels_like": 308.52,
                "temp_min": 312.04,
                "temp_max": 312.04,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 979,
                "humidity": 4,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.35,
                "deg": 17,
                "gust": 4.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-03 09:00:00"
        },
        {
            "dt": 1743681600,
            "main": {
                "temp": 309.56,
                "feels_like": 306.6,
                "temp_min": 309.56,
                "temp_max": 309.56,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 979,
                "humidity": 5,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 5.15,
                "deg": 15,
                "gust": 5.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-04-03 12:00:00"
        }
    ],
    "city": {
        "id": 1259827,
        "name": "Phagwāra",
        "coord": {
            "lat": 31.2178,
            "lon": 75.7694
        },
        "country": "IN",
        "population": 100146,
        "timezone": 19800,
        "sunrise": 1743209372,
        "sunset": 1743254020
    }
}