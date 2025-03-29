import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentWeatherData } from "../../../utils/currentWeatherSlice";
import { fetchWeatherData, getCurrentWeatherData } from "../../../utils/helper";
import { addDailyForeCastData } from "../../../utils/dailyForeCastSlice";
import { addHourlyForeCastData } from "../../../utils/hourlyForeCastSlice";
import { addSearchData } from "../../../utils/recentSearchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = async () => {
    if (!searchCity.trim()) {
      console.error("City name cannot be empty");
      return;
    }

    const currentWeatherData = await getCurrentWeatherData(searchCity);
    const { dailyForeCastFilteredData, hourlyForeCastFilteredData, error } =
      await fetchWeatherData(searchCity);

    if (currentWeatherData.error || error) {
      console.error("Error fetching weather data:", currentWeatherData.error);
      return;
    }
    dispatch(addSearchData({
      city: searchCity,
      temp: Math.trunc(currentWeatherData.main.temp),
      icon: currentWeatherData?.weather[0].icon
    }))
    dispatch(addCurrentWeatherData(currentWeatherData));
    dispatch(addDailyForeCastData(dailyForeCastFilteredData));
    dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
  };

  return (
    <div className="w-full flex">
      <input
        type="text"
        className="w-full bg-gray-700 rounded-2xl focus:outline-none px-3  py-1 text-xs"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      ></input>
      <button className="bg-gray-700 cursor-pointer" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
