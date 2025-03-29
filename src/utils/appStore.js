import { configureStore } from "@reduxjs/toolkit";
import hourlyForeCastSlice from "./hourlyForeCastSlice";
import dailyForeCastSlice from "./dailyForeCastSlice";
import recentSearchSlice from "./recentSearchSlice";

const appStore = configureStore({
  reducer: {
    hourlyForeCast: hourlyForeCastSlice,
    dailyForeCast: dailyForeCastSlice,
    recentSearch: recentSearchSlice,
  },
});

export default appStore;
