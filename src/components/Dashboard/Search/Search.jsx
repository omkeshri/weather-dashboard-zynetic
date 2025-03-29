import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentWeatherData } from "../../../utils/currentWeatherSlice";
import { fetchWeatherData, getCurrentWeatherData } from "../../../utils/helper";
import { addDailyForeCastData } from "../../../utils/dailyForeCastSlice";
import { addHourlyForeCastData } from "../../../utils/hourlyForeCastSlice";
import { addSearchData } from "../../../utils/recentSearchSlice";
import { FaSearch } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { addCityCountry } from "../../../utils/appSlice";

const Search = ({ setError }) => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState("");
  const { lat, lon } = useSelector((store) => store.app);

  const handleSearch = async () => {
    if (!searchCity.trim()) {
      console.error("City name cannot be empty");
      return;
    }

    const currentWeatherData = await getCurrentWeatherData("q=" + searchCity);
    const { dailyForeCastFilteredData, hourlyForeCastFilteredData, error } =
      await fetchWeatherData("q=" + searchCity);

    if (currentWeatherData.error || error) {
      console.error("Error fetching weather data:", currentWeatherData.error);
      setError(currentWeatherData.error || error);
      return;
    }
    setError(0);
    dispatch(
      addSearchData({
        city: searchCity.toUpperCase(),
        temp: Math.trunc(currentWeatherData.main.temp),
        icon: currentWeatherData?.weather[0].icon,
      })
    );
    const city = currentWeatherData.name;
    const country = currentWeatherData.sys.country;
    dispatch(addCityCountry({ city, country }));
    dispatch(addCurrentWeatherData(currentWeatherData));
    dispatch(addDailyForeCastData(dailyForeCastFilteredData));
    dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
    setSearchCity("");
  };

  const handleRefresh = async () => {
    console.log("click");
    if (!lat || !lon) return;
    const currentWeatherData = await getCurrentWeatherData(
      "lat=" + lat + "&lon=" + lon
    );
    const { dailyForeCastFilteredData, hourlyForeCastFilteredData, error } =
      await fetchWeatherData("lat=" + lat + "&lon=" + lon);
    dispatch(addCurrentWeatherData(currentWeatherData));
    dispatch(addDailyForeCastData(dailyForeCastFilteredData));
    dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
  };

  return (
    <div className="w-full flex">
      <input
        type="text"
        className="w-full bg-gray-900 rounded-2xl focus:outline-none px-3  py-1 text-xs"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      ></input>
      <button
        className="bg-gray-900 hover:bg-gray-800 ml-1 text-xs px-4 rounded-full  cursor-pointer"
        onClick={handleRefresh}
      >
        <HiRefresh className="scale-125" />
      </button>
      <button
        className="bg-gray-900 hover:bg-gray-800 ml-1 text-xs px-4 rounded-full  cursor-pointer"
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
