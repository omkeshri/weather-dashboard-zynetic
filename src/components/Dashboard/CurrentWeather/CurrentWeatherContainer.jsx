import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherStatsContainer from "./WeatherStats/WeatherStatsContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentWeatherData } from "../../../utils/currentWeatherSlice";
import { getCurrentWeatherData } from "../../../utils/helper";

const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();
  const currentWeatherData = useSelector(
    (store) => store.currentWeather.currentWeatherData
  );

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getCurrentWeatherData("Phagwara");
      dispatch(addCurrentWeatherData(data));
    };
    fetchWeather();
  }, []);

  return (
    currentWeatherData && (
      <div className="bg-[#344d6e] h-[95%]">
        <WeatherInfo currentWeatherData={currentWeatherData} />
        <WeatherStatsContainer currentWeatherData={currentWeatherData} />
      </div>
    )
  );
};

export default CurrentWeatherContainer;
