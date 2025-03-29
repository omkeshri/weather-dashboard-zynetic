import React from "react";
import WeatherDetailCard from "./WeatherDetailCard";
import { weatherStatsProps } from "../../../utils/constant";

const WeatherStatsContainer = () => {
  return (
    <div className="flex flex-wrap justify-around gap-y-3">
      {weatherStatsProps.map((stat, index) => (
        <WeatherDetailCard key={index} {...stat} /> 
      ))}
    </div>
  );
};

export default WeatherStatsContainer;
