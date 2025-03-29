import { createSlice } from "@reduxjs/toolkit";

const hourlyForeCastSlice = createSlice({
  name: "hourlyForeCast",
  initialState: {
    hourlyForecastData: [],
  },
  reducers: {
    addHourlyForeCastData: (state, action) => {
      state.hourlyForecastData = action.payload;
    },
  },
});

export const { addHourlyForeCastData } = hourlyForeCastSlice.actions;
export default hourlyForeCastSlice.reducer;
