import React from "react";
import { PiThermometer } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import { getWindDirection } from "../../../../utils/helper";
import WeatherDetailCard from "./WeatherDetailCard";
import { useSelector } from "react-redux";

const WeatherStatsContainer = () => {
  const currentWeatherData = useSelector((store) => store.currentWeather.currentWeatherData);
  if (!currentWeatherData || Object.keys(currentWeatherData).length === 0) return "hash";
  const feelLikeDescription =
  Math.trunc(currentWeatherData.main.temp) < Math.trunc(currentWeatherData.main.feels_like)
    ? "Humidity is making it feel warmer"
    : Math.trunc(currentWeatherData.main.temp) > Math.trunc(currentWeatherData.main.feels_like)
    ? "Wind is making it feel colder"
    : "Feels just like the actual temperature";


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
