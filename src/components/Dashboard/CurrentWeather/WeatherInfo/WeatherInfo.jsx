import React, { useEffect, useState } from "react";
import { API_DATA } from "../../../../utils/constant";

const WeatherInfo = ({ currentWeatherData }) => {
  const { main, description, icon } = currentWeatherData?.weather[0];

  return (
    <div className=" flex flex-col items-center px-10 pt-16 pb-10">
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

      <p className="text-xs tracking-wide text-center">{description}</p>
    </div>
  );
};

export default WeatherInfo;
