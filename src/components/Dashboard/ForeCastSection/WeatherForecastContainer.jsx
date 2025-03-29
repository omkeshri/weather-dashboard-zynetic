import React from "react";

import WeatherInfoCard from "./WeatherInfoCard";

const WeatherForecastContainer = ({ icon, label }) => {
  return (
    <div className="bg-black opacity-50 w-full p-5 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className="scale-110">{icon}</div>
        <p>{label}</p>
      </div>
      <hr></hr>
      <div className="flex gap-10 mt-1 overflow-x-scroll custom-scrollbar pb-1">
        <WeatherInfoCard />
        <WeatherInfoCard />
        <WeatherInfoCard />
        <WeatherInfoCard />
        <WeatherInfoCard />
        <WeatherInfoCard />
      </div>
    </div>
  );
};

export default WeatherForecastContainer;
