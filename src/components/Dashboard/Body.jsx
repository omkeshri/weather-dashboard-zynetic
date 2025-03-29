import React from "react";
import CurrentWeatherContainer from "./CurrentWeather/CurrentWeatherContainer";
import WeatherForecastContainer from "./ForeCastSection/WeatherForecastContainer";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";

const Body = () => {
  

  return (
    <div className="h-full bg-[#111720] rounded-4xl text-white flex  overflow-scroll no-scrollbar">
      <div className="w-1/2 p-10">
        <CurrentWeatherContainer />
      </div>

      <div className="w-1/2 p-10 flex flex-col justify-around space-y-5">
        <WeatherForecastContainer icon={<GoClock />} label="HOURLY FORECAST" />
        <WeatherForecastContainer
          icon={<MdCalendarToday />}
          label="5-DAY-FORECAST"
        />
        <WeatherForecastContainer
          icon={<FaClockRotateLeft />}
          label="RECENT SEARCH"
        />
      </div>
    </div>
  );
};

export default Body;
