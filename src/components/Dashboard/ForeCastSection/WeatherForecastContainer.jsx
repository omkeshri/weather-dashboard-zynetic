import React, { useEffect } from "react";
import ForeCastCard from "./ForeCastCard";
import { useSelector } from "react-redux";
import Shimmer from "../../Shimmer/Shimmer";

const WeatherForecastContainer = ({ id, badge, label, data = [] }) => {
  const { showShimmer, theme: currentTheme } = useSelector(
    (store) => store.app
  );

  return (
    <div
      className={`${
        currentTheme === "dark"
          ? "bg-gray-950 hover:bg-[#050505]"
          : "bg-gradient-to-br from-blue-200 to-gray-300 font-medium hover:bg-gradient-to-br hover:from-blue-300 hover:to-gray-300"
      } brightness-105 shadow-lg w-full p-5 rounded-lg`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="scale-110">{badge}</div>
        <p className="tracking-wide">{label}</p>
      </div>
      <hr></hr>

      {showShimmer === 1 ? (
        <div className="py-[1.75rem]">
          <Shimmer />
        </div>
      ) : data.length !== 0 ? (
        <div
          className={`flex gap-10 mt-1 overflow-x-scroll  custom-scrollbar pb-1`}
        >
          {data.map((val, index) => (
            <ForeCastCard
              key={index}
              time={val.time}
              date={val.date}
              city={val.city}
              temp={Math.trunc(val.temp)}
              icon={val.icon}
            />
          ))}
        </div>
      ) : (
        <p className="py-[2.75rem] px-1">
          {id === 3 ? "No Searches Yet!" : "N/A"}
        </p>
      )}
    </div>
  );
};

export default WeatherForecastContainer;
