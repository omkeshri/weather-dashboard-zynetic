import React from "react";
import CurrentWeatherContainer from "./CurrentWeather/CurrentWeatherContainer";
import WeatherForecastCard from "./ForeCastSection/WeatherForecastCard";
import WeatherDetailCard from "./CurrentWeather/WeatherDetailCard";
import { PiThermometer } from "react-icons/pi";
import { API_DATA } from "../../utils/constant";
import { GoClock } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";

const Body = () => {
  return (
    <div className="h-full bg-[#111720] rounded-4xl text-white flex  overflow-scroll no-scrollbar"> 
      <div className="w-1/2 p-10">
        <CurrentWeatherContainer />
      </div>

      <div className="w-1/2 p-10 space-y-5">
        <WeatherForecastCard icon={<GoClock />} label="HOURLY FORECAST" />
        <WeatherForecastCard icon={<MdCalendarToday />} label="5-DAY-FORECAST"/>

        <div className="flex justify-between">
          <WeatherDetailCard
            icon={<PiThermometer />}
            label="TEMP MIN"
            value={Math.trunc(API_DATA.main.temp_min)}
            unit="°C"
          />
          <WeatherDetailCard
            icon={<PiThermometer />}
            label="TEMP MAX"
            value={Math.trunc(API_DATA.main.temp_min)}
            unit="°C"
          />
        </div>

      </div>
    </div>
  );
};

export default Body;
