import { setShowShimmer } from "./appSlice";
import { addCurrentWeatherData } from "./currentWeatherSlice";
import { addDailyForeCastData } from "./dailyForeCastSlice";
import {
  fetchWeatherData,
  getCurrentWeatherData,
  getRequiredData,
} from "./helper";
import { addHourlyForeCastData } from "./hourlyForeCastSlice";
import { addSearchData } from "./recentSearchSlice";

export const handleSearch = async (
  dispatch,
  searchCity,
  setSearchCity,
  setError,
  recentSearch
) => {
  dispatch(setShowShimmer(1));
  if (!searchCity.trim()) {
    setError("Please enter city name or refresh!");
    dispatch(setShowShimmer(1));
    return;
  }

  let currentWeatherData;
  const hasCurrentWeatherData = recentSearch.find(
    (val) => val.city === searchCity.toUpperCase()
  );

  if (hasCurrentWeatherData) {
    currentWeatherData = hasCurrentWeatherData;
    dispatch(addCurrentWeatherData(currentWeatherData));
    dispatch(
      addDailyForeCastData(hasCurrentWeatherData.dailyForeCastFilteredData)
    );
    dispatch(
      addHourlyForeCastData(hasCurrentWeatherData.hourlyForeCastFilteredData)
    );
  } else {
    currentWeatherData = await getCurrentWeatherData("q=" + searchCity);
    const { dailyForeCastFilteredData, hourlyForeCastFilteredData, error } =
      await fetchWeatherData("q=" + searchCity);

    if (currentWeatherData.error) {
      console.error("Error fetching weather data:", currentWeatherData.error);
      setError(currentWeatherData.error);
      return;
    }

    // previous way to store data
    // dispatch(
    //   addSearchData({
    //     weather: [
    //       {
    //         main: currentWeatherData.weather[0].main,
    //         icon: currentWeatherData?.weather[0].icon,
    //         description: currentWeatherData.weather[0].description,
    //       },
    //     ],
    //     main: {
    //       temp: Math.trunc(currentWeatherData.main.temp),
    //       feels_like: Math.trunc(currentWeatherData.main.feels_like),
    //       humidity: currentWeatherData.main.humidity,
    //     },
    //     visibility: currentWeatherData.visibility / 1000,
    //     wind: {
    //       speed: Math.trunc(currentWeatherData.wind.speed),
    //       deg: currentWeatherData.wind.deg,
    //       gust: currentWeatherData.wind.gust,
    //     },
    //     name: searchCity.toUpperCase(),
    //     sys: { country: currentWeatherData.sys.country },
    //   })
    // );
    dispatch(addCurrentWeatherData(getRequiredData(currentWeatherData, searchCity)));
    dispatch(addDailyForeCastData(dailyForeCastFilteredData));
    dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
    const requiredData = getRequiredData(currentWeatherData, searchCity);
    requiredData["dailyForeCastFilteredData"] = dailyForeCastFilteredData;
    requiredData["hourlyForeCastFilteredData"] = hourlyForeCastFilteredData;
    dispatch(addSearchData(requiredData));
  }


  if (currentWeatherData.error) {
    console.error("Error fetching weather data:", currentWeatherData.error);
    setError(currentWeatherData.error);
    return;
  }

  setError(0);
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
  dispatch(addCurrentWeatherData(getRequiredData(currentWeatherData, currentWeatherData.name)));

  dispatch(addDailyForeCastData(dailyForeCastFilteredData));
  dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
  dispatch(setShowShimmer(0));
};
