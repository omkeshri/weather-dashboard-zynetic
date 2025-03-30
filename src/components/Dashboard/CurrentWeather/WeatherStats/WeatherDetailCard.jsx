import React from "react";
import { useSelector } from "react-redux";

const WeatherDetailCard = ({ icon, label, value, unit, description }) => {
  const currentTheme = useSelector((store) => store.app.theme);
  return (
    <div
      className={`
        ${
          currentTheme === "dark"
            ? "bg-black opacity-95"
            : "bg-gradient-to-br from-blue-500 to-gray-400 "
        } brightness-125
      p-4 rounded-xl shadow-md flex flex-col text-white w-full mx-4 2xl:mx-0 2xl:w-[230px]  min-h-[140px]`}
    >
      <div className="flex items-center gap-2">
        <div className="scale-125">{icon}</div>
        <h3 className="text-md font-medium ">{label}</h3>
      </div>

      {/* Value */}
      <p className="text-4xl font-medium mb-3">
        {Math.trunc(value)}
        {unit}
      </p>
      <p className="text-xs tracking-wider w-[90%]">{description}</p>
    </div>
  );
};

export default WeatherDetailCard;
