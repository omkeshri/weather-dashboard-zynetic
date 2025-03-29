import React, { useEffect, useState } from 'react'
import WeatherInfo from './WeatherInfo/WeatherInfo'
import WeatherStatsContainer from './WeatherStats/WeatherStatsContainer'

const CurrentWeatherContainer = () => {

const [ currentWeatherData, setCurrentWeatherData ] = useState(null);

  const getCurrentWeatherData = async () => {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=phagwara&appid=1a65ca96b19ff48991458fcae57fccd3&units=metric"
    );
    const json_data = await data.json();
    setCurrentWeatherData(json_data);
    console.log(json_data)
  };

  useEffect(() => {
    getCurrentWeatherData();
  }, []);

  return (
    currentWeatherData&&(
    <div className='bg-[#344d6e] h-full'>
        <WeatherInfo currentWeatherData={currentWeatherData}/>
        <WeatherStatsContainer currentWeatherData={currentWeatherData}/>
    </div>)
  )
}

export default CurrentWeatherContainer