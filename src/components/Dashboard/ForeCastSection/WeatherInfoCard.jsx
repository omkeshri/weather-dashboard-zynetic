import React from "react";

const WeatherInfoCard = () => {
  return (
    <div className="flex flex-col items-center px-4 py-3  rounded-xl opacity-100">
      <h3 className="text-[10px] font-semibold  tracking-wide">Now</h3>
      <h1 className="text-xl font-medium  mb-2">28°C</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlIHZfK_h-hHc5C-nUrkwnfFPN-rsEw69tw&s"
        className="w-7"
      ></img>
    </div>
  );
};

export default WeatherInfoCard;
