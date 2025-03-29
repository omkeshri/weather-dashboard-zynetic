import { configureStore } from "@reduxjs/toolkit";
import hourlyForeCastSlice from "./hourlyForeCastSlice";
import dailyForeCastSlice from "./dailyForeCastSlice";
import recentSearchSlice from "./recentSearchSlice";
import currentWeatherSlice from "./currentWeatherSlice";
import appSlice from "./appSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    hourlyForeCast: hourlyForeCastSlice,
    dailyForeCast: dailyForeCastSlice,
    recentSearch: recentSearchSlice,
    currentWeather: currentWeatherSlice,
  },
});

export default appStore;
