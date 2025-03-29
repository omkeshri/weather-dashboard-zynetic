// https://api.openweathermap.org/data/2.5/weather?q=phagwara&appid=1a65ca96b19ff48991458fcae57fccd3&units=metric

import { LuWind } from "react-icons/lu";
import { PiThermometer } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
export const API_DATA = {
  coord: {
    lon: 75.7694,
    lat: 31.2178,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 25.92,
    feels_like: 24.72,
    temp_min: 25.92,
    temp_max: 25.92,
    pressure: 1007,
    humidity: 6,
    sea_level: 1007,
    grnd_level: 980,
  },
  visibility: 10000,
  wind: {
    speed: 3.74,
    deg: 297,
    gust: 5.06,
  },
  clouds: {
    all: 0,
  },
  dt: 1743252504,
  sys: {
    country: "IN",
    sunrise: 1743209372,
    sunset: 1743254020,
  },
  timezone: 19800,
  id: 1259827,
  name: "Phagwāra",
  cod: 200,
};

export const weatherStatsProps = [
  {
    icon: <PiThermometer />,
    label: "FEELS LIKE",
    // value: currentWeatherData.main.feels_like,
    unit: "°C",
    description: "Humidity is making it feel warmer",
  },
  {
    icon: <LuWind />,
    label: "WIND SPEED",
    // value: currentWeatherData.wind.speed,
    unit: "MPH",
    description: "Current wind speed",
  },
  {
    icon: <FaRegEye />,
    label: "VISIBILITY",
    // value: currentWeatherData.visibility / 1000, // Convert meters to km
    unit: "km",
    description: "Distance you can see clearly",
  },
  {
    icon: <WiHumidity />,
    label: "HUMIDITY",
    // value: currentWeatherData.main.humidity,
    unit: "%",
    description: "Moisture level in the air",
  },
];

export const FIVE_DAY = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1743260400,
      main: {
        temp: 293.89,
        feels_like: 292.23,
        temp_min: 293.89,
        temp_max: 293.89,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 8,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 3.56,
        deg: 315,
        gust: 3.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-29 15:00:00",
    },
    {
      dt: 1743271200,
      main: {
        temp: 292.68,
        feels_like: 290.95,
        temp_min: 290.27,
        temp_max: 292.68,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 983,
        humidity: 10,
        temp_kf: 2.41,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 3.93,
        deg: 325,
        gust: 8.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-29 18:00:00",
    },
    {
      dt: 1743282000,
      main: {
        temp: 290.26,
        feels_like: 288.42,
        temp_min: 288.45,
        temp_max: 290.26,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 15,
        temp_kf: 1.81,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 3.51,
        deg: 341,
        gust: 5.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-29 21:00:00",
    },
    {
      dt: 1743292800,
      main: {
        temp: 287.21,
        feels_like: 285.25,
        temp_min: 287.21,
        temp_max: 287.21,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 3.06,
        deg: 329,
        gust: 3.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-30 00:00:00",
    },
    {
      dt: 1743303600,
      main: {
        temp: 294.82,
        feels_like: 293.43,
        temp_min: 294.82,
        temp_max: 294.82,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 984,
        humidity: 15,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 3.3,
        deg: 327,
        gust: 4.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-03-30 03:00:00",
    },
    {
      dt: 1743314400,
      main: {
        temp: 304.28,
        feels_like: 302.3,
        temp_min: 304.28,
        temp_max: 304.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 984,
        humidity: 6,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 5.18,
        deg: 316,
        gust: 6.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-03-30 06:00:00",
    },
    {
      dt: 1743325200,
      main: {
        temp: 307.7,
        feels_like: 305.11,
        temp_min: 307.7,
        temp_max: 307.7,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 981,
        humidity: 5,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 5.05,
        deg: 315,
        gust: 5.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-03-30 09:00:00",
    },
    {
      dt: 1743336000,
      main: {
        temp: 306.27,
        feels_like: 303.92,
        temp_min: 306.27,
        temp_max: 306.27,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 980,
        humidity: 6,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 4.51,
        deg: 312,
        gust: 5.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-03-30 12:00:00",
    },
    {
      dt: 1743346800,
      main: {
        temp: 295.52,
        feels_like: 294.1,
        temp_min: 295.52,
        temp_max: 295.52,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 11,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.93,
        deg: 333,
        gust: 3.04,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-30 15:00:00",
    },
    {
      dt: 1743357600,
      main: {
        temp: 293.09,
        feels_like: 291.53,
        temp_min: 293.09,
        temp_max: 293.09,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 983,
        humidity: 15,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.22,
        deg: 34,
        gust: 2.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-30 18:00:00",
    },
    {
      dt: 1743368400,
      main: {
        temp: 291.61,
        feels_like: 289.96,
        temp_min: 291.61,
        temp_max: 291.61,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 17,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.37,
        deg: 18,
        gust: 2.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-30 21:00:00",
    },
    {
      dt: 1743379200,
      main: {
        temp: 289.78,
        feels_like: 287.99,
        temp_min: 289.78,
        temp_max: 289.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 983,
        humidity: 19,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.58,
        deg: 342,
        gust: 1.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-03-31 00:00:00",
    },
  ],
  city: {
    id: 1259827,
    name: "Phagwāra",
    coord: {
      lat: 31.2178,
      lon: 75.7694,
    },
    country: "IN",
    population: 100146,
    timezone: 19800,
    sunrise: 1743209372,
    sunset: 1743254020,
  },
};


export const filteredData = FIVE_DAY.list.reduce((acc, item) => {
    if (item.dt_txt.includes("00:00:00")) {
        acc.push({
            date: item.dt_txt.split(" ")[0], // Extracts only the date part
            temp: item.main.temp,
            icon: item.weather[0].icon
        });
    }
    return acc;
}, []);


