import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeatherInfo = ({}) => {
  const currentWeatherData = useSelector(
    (store) => store.currentWeather.currentWeatherData
  );
  if (!currentWeatherData || Object.keys(currentWeatherData).length === 0)
    return "hash";
  const { main, description, icon } = currentWeatherData?.weather[0];
  const { city, country } = useSelector((store) => store.app);
  
  return (
    <div className=" flex flex-col items-center px-10 pt-10 pb-10">
      <h1>{city}, {country}</h1>
      <div className="w-10">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          className="scale-150"
        ></img>
      </div>

      <h1 className="text-6xl font-medium mb-2">
        {Math.trunc(currentWeatherData.main.temp)}°C
      </h1>

      <h3 className="text-lg mb-2 tracking-wide">{main}</h3>

      <p className="text-xs tracking-wide text-center">
        {description.toUpperCase()}
      </p>
    </div>
  );
};

export default WeatherInfo;
