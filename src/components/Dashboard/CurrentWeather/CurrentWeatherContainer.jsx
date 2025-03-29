import React from 'react'
import WeatherInfo from './WeatherInfo'
import WeatherStatsContainer from './WeatherStatsContainer'

const CurrentWeatherContainer = () => {
  return (
    <div className='bg-[#344d6e] h-full'>
        <WeatherInfo />
        <WeatherStatsContainer />
    </div>
  )
}

export default CurrentWeatherContainer