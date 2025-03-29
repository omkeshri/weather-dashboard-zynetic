import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherStatsContainer from "./WeatherStats/WeatherStatsContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentWeatherData } from "../../../utils/currentWeatherSlice";
import { getCurrentWeatherData } from "../../../utils/helper";
import { addCityCountry, setShowShimmer } from "../../../utils/appSlice";
import Shimmer from "../../Shimmer/Shimmer";

const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();
  
  const { lat, lon, showShimmer } = useSelector((store) => store.app);
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
      dispatch(addCityCountry({ city, country }));
      dispatch(setShowShimmer(0));
    };
    fetchWeather();
  }, [lat, lon]);

  if (showShimmer) return <Shimmer />;
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
