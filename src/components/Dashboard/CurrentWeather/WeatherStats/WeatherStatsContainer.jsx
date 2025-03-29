import React from "react";
import { PiThermometer } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import { getWindDirection } from "../../../../utils/helper";
import WeatherDetailCard from "./WeatherDetailCard";

const WeatherStatsContainer = ({ currentWeatherData }) => {
  const feelLikeDescription =
    currentWeatherData.main.temp < currentWeatherData.main.feels_like
      ? "Humidity is making it feel warmer"
      : "Wind is making it feel colder";

  const windDirection = getWindDirection(currentWeatherData.wind.speed);
  const windSpeedDescription =
    "Wind is blowing from " +
    windDirection +
    ", gust is " +
    currentWeatherData.wind.gust;

  const humidity = currentWeatherData.main.humidity;
  const humidityDescription =
    humidity < 30
      ? "Low, Dry Air"
      : humidity <= 60
      ? "Moderate, Comfortable"
      : "High, Humid";

  return (
    <div className="flex flex-wrap justify-around gap-y-3">
      <WeatherDetailCard
        icon={<PiThermometer />}
        label="FEELS LIKE"
        value={currentWeatherData.main.feels_like}
        unit="°C"
        description={feelLikeDescription}
      />
      <WeatherDetailCard
        icon={<LuWind />}
        label="WIND SPEED"
        value={currentWeatherData.wind.speed}
        unit="mph"
        description={windSpeedDescription}
      />
      <WeatherDetailCard
        icon={<FaRegEye />}
        label="VISIBILITY"
        value={currentWeatherData.visibility / 1000}
        unit="km"
        description=""
      />
      <WeatherDetailCard
        icon={<WiHumidity />}
        label="HUMIDITY"
        value={humidity}
        unit="%"
        description={humidityDescription}
      />
    </div>
  );
};

export default WeatherStatsContainer;
