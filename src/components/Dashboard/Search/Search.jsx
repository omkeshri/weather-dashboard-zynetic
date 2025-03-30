import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentWeatherData } from "../../../utils/currentWeatherSlice";
import { fetchWeatherData, getCurrentWeatherData } from "../../../utils/helper";
import { addDailyForeCastData } from "../../../utils/dailyForeCastSlice";
import { addHourlyForeCastData } from "../../../utils/hourlyForeCastSlice";
import { addSearchData } from "../../../utils/recentSearchSlice";
import { FaSearch } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { addCityCountry, setShowShimmer } from "../../../utils/appSlice";
import SearchButton from "./SearchButton";

const Search = ({ setError }) => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState("");
  const { lat, lon, theme: currentTheme } = useSelector((store) => store.app);

  const handleSearch = async () => {
   
    dispatch(setShowShimmer(1));
    if (!searchCity.trim()) {
      setError("Please enter city name or refresh!");
      dispatch(setShowShimmer(1));
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
    dispatch(setShowShimmer(0));
  };

  const handleRefresh = async () => {
    setError(0);
    dispatch(setShowShimmer(1));
    if (!lat || !lon) return;
    const currentWeatherData = await getCurrentWeatherData(
      "lat=" + lat + "&lon=" + lon
    );
    const { dailyForeCastFilteredData, hourlyForeCastFilteredData, error } =
      await fetchWeatherData("lat=" + lat + "&lon=" + lon);
    dispatch(addCurrentWeatherData(currentWeatherData));
    dispatch(addDailyForeCastData(dailyForeCastFilteredData));
    dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
    dispatch(setShowShimmer(0));
  };

  return (
    <div className="w-full flex">
      <input
        type="text"
        className={`w-full ${
          currentTheme === "dark"
            ? "bg-gray-900"
            : "bg-gradient-to-br from-blue-200 to-gray-300 font-medium"
        } rounded-2xl focus:outline-none px-3  py-1 text-xs`}
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      ></input>
      <SearchButton
        icon={<HiRefresh className="scale-125" />}
        click={() => handleRefresh()}
      />
      <SearchButton icon={<FaSearch />} click={() => handleSearch()} />
    </div>
  );
};

export default Search;
