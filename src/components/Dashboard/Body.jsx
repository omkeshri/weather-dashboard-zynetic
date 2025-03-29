import React, { useEffect, useState } from "react";
import CurrentWeatherContainer from "./CurrentWeather/CurrentWeatherContainer";
import WeatherForecastContainer from "./ForeCastSection/WeatherForecastContainer";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addDailyForeCastData } from "../../utils/dailyForeCastSlice";
import { addHourlyForeCastData } from "../../utils/hourlyForeCastSlice";
import { fetchWeatherData } from "../../utils/helper";
import Search from "./Search/Search";

const Body = () => {
  const dispatch = useDispatch();

  const dailyForeCastData = useSelector(
    (store) => store.dailyForeCast.dailyForeCastData
  );

  const hourlyForecastData = useSelector(
    (store) => store.hourlyForeCast.hourlyForecastData
  );

  const recentSearchData = useSelector(
    (store) => store.recentSearch.searchData
  );

  useEffect(() => {
    const fetchData = async () => {
      const { dailyForeCastFilteredData, hourlyForeCastFilteredData } =
        await fetchWeatherData("phagwara");
      dispatch(addDailyForeCastData(dailyForeCastFilteredData));
      dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-[#111720] rounded-4xl text-white flex  overflow-scroll no-scrollbar h-full">
      <div className="w-1/2 p-10 space-y-2">
        <Search />
        <CurrentWeatherContainer />
      </div>

      <div className="w-1/2 p-10 flex flex-col justify-around space-y-5">
        <WeatherForecastContainer
          id={1}
          badge={<GoClock />}
          label="TODAY 3-HOURLY FORECAST"
          data={hourlyForecastData}
        />

        <WeatherForecastContainer
          id={2}
          badge={<MdCalendarToday />}
          label="5-DAY-FORECAST"
          data={dailyForeCastData}
        />

        <WeatherForecastContainer
          id={3}
          badge={<FaClockRotateLeft />}
          label="RECENT SEARCH"
          data={recentSearchData}
        />
      </div>
    </div>
  );
};

export default Body;
