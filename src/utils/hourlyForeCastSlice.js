import { createSlice } from "@reduxjs/toolkit";

const hourlyForeCastSlice = createSlice({
  name: "hourlyForeCast",
  initialState: {
    hourlyForecastData: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = hourlyForeCastSlice.actions;
export default hourlyForeCastSlice.reducer;
