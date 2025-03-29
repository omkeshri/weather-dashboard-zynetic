import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherStatsContainer from "./WeatherStats/WeatherStatsContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentWeatherData } from "../../../utils/currentWeatherSlice";
import { getCurrentWeatherData } from "../../../utils/helper";
import { addCityCountry } from "../../../utils/appSlice";

const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();
  const { lat, lon } = useSelector((store) => store.app);
  const currentWeatherData = useSelector(
    (store) => store.currentWeather.currentWeatherData
  );

  useEffect(() => {
    if (!lat || !lon) return;
    const fetchWeather = async () => {
      const data = await getCurrentWeatherData("lat=" + lat + "&lon=" + lon);
      dispatch(addCurrentWeatherData(data));
      const city = data.name;
      const country = data.sys.country;
      dispatch(addCityCountry({city,country}))
    };
    fetchWeather();
  }, [lat, lon]);

  return (
    currentWeatherData && (
      <div className="bg-gray-950 rounded-lg brightness-105 h-[95%]">
        <WeatherInfo currentWeatherData={currentWeatherData} />
        <WeatherStatsContainer currentWeatherData={currentWeatherData} />
      </div>
    )
  );
};

export default CurrentWeatherContainer;
