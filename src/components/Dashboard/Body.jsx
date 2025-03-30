import WeatherForecastContainer from "./ForeCastSection/WeatherForecastContainer";
import CurrentWeatherContainer from "./CurrentWeather/CurrentWeatherContainer";
import { addHourlyForeCastData } from "../../utils/hourlyForeCastSlice";
import { fetchWeatherData, getUserLocation } from "../../utils/helper";
import { addDailyForeCastData } from "../../utils/dailyForeCastSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaClockRotateLeft } from "react-icons/fa6";
import { addLocation } from "../../utils/appSlice";
import React, { useEffect, useState } from "react";
import { MdCalendarToday } from "react-icons/md";
import { GoClock } from "react-icons/go";
import Search from "./Search/Search";
import Error from "../Error/Error";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(0);
  const currentTheme = useSelector(store => store.app.theme)

  const dailyForeCastData = useSelector(
    (store) => store.dailyForeCast.dailyForeCastData
  );
  console.log(dailyForeCastData)

  const hourlyForecastData = useSelector(
    (store) => store.hourlyForeCast.hourlyForecastData
  );

  const recentSearchData = useSelector(
    (store) => store.recentSearch.searchData
  );

  useEffect(() => {
    

    const fetchData = async () => {
      const {lat, lon} = await getUserLocation();
      dispatch(addLocation({lat, lon}));
      const { dailyForeCastFilteredData, hourlyForeCastFilteredData } =
        await fetchWeatherData("lat="+lat+"&lon="+lon);
      dispatch(addDailyForeCastData(dailyForeCastFilteredData));
      dispatch(addHourlyForeCastData(hourlyForeCastFilteredData));
    };

    fetchData();
  }, []);


  return (
    <div className={`w-full ${currentTheme==='light'?"bg-[#fff] opacity-70 text-black":"bg-black opacity-80 text-white"}  rounded-4xl  flex xl:flex-row flex-col  overflow-scroll no-scrollbar h-full`}>
      <div className="w-full xl:w-1/2 px-10 pt-10 space-y-2">
        <Search setError={(err) => setError(err)} />
        {!error ? <CurrentWeatherContainer setError={setError}/> : <></>}
        {error ? <Error err={error} /> : <></>}
      </div>

      {!error ? (
        <div className="w-full xl:w-1/2 p-10 flex flex-col justify-around space-y-5">
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Body;
