import { addCityCountry, setShowShimmer } from "./appSlice";
import { addCurrentWeatherData } from "./currentWeatherSlice";
import { addDailyForeCastData } from "./dailyForeCastSlice";
import { fetchWeatherData, getCurrentWeatherData } from "./helper";
import { addHourlyForeCastData } from "./hourlyForeCastSlice";
import { addSearchData } from "./recentSearchSlice";

export const handleSearch = async (
  dispatch,
  searchCity,
  setSearchCity,
  setError
) => {
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

export const handleRefresh = async (
  dispatch,
  setError,
  lat,
  lon,
  setSearchCity
) => {
  setError(0);
  setSearchCity("");
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
