import React from "react";

const ForeCastCard = ({time, date, city, temp, icon}) => {
  return (
    <div className="flex flex-col items-center px-4 py-3  rounded-xl opacity-100">
      <h3 className="text-[10px] font-semibold  tracking-wide">{time}</h3>
      <h3 className="text-[10px] font-semibold  tracking-wide">{date}</h3>
      <h3 className="text-[10px] font-semibold  tracking-wide">{city}</h3>
      <h1 className="text-xl font-medium ">{temp}°C</h1>
      <img
        src={"https://openweathermap.org/img/wn/"+icon+"@2x.png"}
        className="w-7"
      ></img>
    </div>
  );
};

export default ForeCastCard;
