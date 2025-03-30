import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    lat: "",
    lon: "",
    city: "",
    country: "",
    showShimmer: 1,
    theme: 'dark',
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
    setShowShimmer: (state, action) => {
      state.showShimmer = action.payload;
    },
    setTheme: (state) => {
        state.theme = state.theme==='dark'?'light':'dark'
    }
  },
});

export const { addLocation, addCityCountry, setShowShimmer, setTheme } = appSlice.actions;
export default appSlice.reducer;
