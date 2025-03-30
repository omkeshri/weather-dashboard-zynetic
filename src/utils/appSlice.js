import { createSlice } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem("theme") || 'dark';

const appSlice = createSlice({
  name: "app",
  initialState: {
    lat: 28.55,
    lon: 77.10,
    city: "",
    country: "",
    showShimmer: 1,
    theme: defaultTheme,
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
        localStorage.setItem('theme', state.theme);
    }
  },
});

export const { addLocation, addCityCountry, setShowShimmer, setTheme } = appSlice.actions;
export default appSlice.reducer;
