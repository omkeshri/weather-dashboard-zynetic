import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    lat: "",
    lon: "",
    city: "",
    country: "",
  },
  reducers: {
    addLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    addCityCountry: (state, action) => {
      (state.city = action.payload.city),
        (state.country = action.payload.country);
    },
  },
});

export const { addLocation, addCityCountry } = appSlice.actions;
export default appSlice.reducer;
