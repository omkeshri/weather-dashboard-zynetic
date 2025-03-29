import React from "react";

const WeatherDetailCard = ({ icon, label, value, unit, description }) => {
  return (
    <div className="bg-black p-4 rounded-xl shadow-md flex flex-col text-white w-[230px]  min-h-[140px]">
      <div className="flex items-center gap-2">
        <div className="scale-125">{icon}</div>
        <h3 className="text-md font-medium ">{label}</h3>
      </div>

      {/* Value */}
      <p className="text-4xl font-medium mb-3">
        {Math.trunc(value)} 
        {unit}
      </p>
      <p className="text-xs tracking-wide w-[90%]">{description}</p>
    </div>
  );
};

export default WeatherDetailCard;
