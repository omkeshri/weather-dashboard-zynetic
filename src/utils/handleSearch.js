import { useSelector } from "react-redux";
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
    (val) => val.name === searchCity.toUpperCase()
  );

  if (hasCurrentWeatherData) {
    currentWeatherData = hasCurrentWeatherData;
  } else {
    currentWeatherData = await getCurrentWeatherData("q=" + searchCity);
    
    if (currentWeatherData.error) {
      console.error("Error fetching weather data:", currentWeatherData.error);
      setError(currentWeatherData.error);
      return;
    }

    dispatch(
      addSearchData({
        weather: [
          {
            main: currentWeatherData.weather[0].main,
            icon: currentWeatherData?.weather[0].icon,
            description: currentWeatherData.weather[0].description,
          },
        ],
        main: {
          temp: Math.trunc(currentWeatherData.main.temp),
          feels_like: Math.trunc(currentWeatherData.main.feels_like),
          humidity: currentWeatherData.main.humidity,
        },
        visibility: currentWeatherData.visibility / 1000,
        wind: {
          speed: Math.trunc(currentWeatherData.wind.speed),
          deg: currentWeatherData.wind.deg,
          gust: currentWeatherData.wind.gust,
        },
        name: searchCity.toUpperCase(),
        sys: { country: currentWeatherData.sys.country },
      })
    );
  }
  dispatch(addCurrentWeatherData(currentWeatherData));
  const{ dailyForeCastFilteredData, hourlyForeCastFilteredData, error } =
  await fetchWeatherData("q=" + searchCity);
  if (currentWeatherData.error) {
    console.error("Error fetching weather data:", currentWeatherData.error);
    setError(currentWeatherData.error);
    return;
  }
  setError(0);
  console.log(dailyForeCastFilteredData);
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
