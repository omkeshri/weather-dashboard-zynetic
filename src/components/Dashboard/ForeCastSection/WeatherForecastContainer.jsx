import React, { useEffect } from "react";
import ForeCastCard from "./ForeCastCard";

const WeatherForecastContainer = ({ badge, label, data = [] }) => {
  if (!data.length) return "he";
  // console.log(data)
  return (
    <div className="bg-black opacity-50 w-full p-5 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className="scale-110">{badge}</div>
        <p>{label}</p>
      </div>
      <hr></hr>
      <div className="flex gap-10 mt-1 overflow-x-scroll custom-scrollbar pb-1">
        {data.map((val) => (
          <ForeCastCard
            time={val.time}
            date={val.date}
            city={val.city}
            temp={Math.trunc(val.temp)}
            icon={val.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecastContainer;
