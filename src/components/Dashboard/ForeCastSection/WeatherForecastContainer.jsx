import React, { useEffect } from "react";
import ForeCastCard from "./ForeCastCard";

const WeatherForecastContainer = ({ id, badge, label, data = [] }) => {
  
  return (
    <div className="bg-gray-950 brightness-105 shadow-lg w-full p-5 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className="scale-110">{badge}</div>
        <p>{label}</p>
      </div>
      <hr></hr>
      {data.length !== 0 ? (
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
      ) : (
        <>
        <p className="py-[2.75rem] px-1">{id===3?"No Searches Yet!":"N/A"}</p>
        </>
      )}
    </div>
  );
};

export default WeatherForecastContainer;
