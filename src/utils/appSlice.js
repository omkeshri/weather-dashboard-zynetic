import { createSlice } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem("theme") || 'dark';

const appSlice = createSlice({
  name: "app",
  initialState: {
    lat: 28.70,
    lon: 77.10,
    showShimmer: 1,
    theme: defaultTheme,
    
    // city: "",
    // country: "",
  },
  reducers: {
    addLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    setShowShimmer: (state, action) => {
      state.showShimmer = action.payload;
    },
    setTheme: (state) => {
      state.theme = state.theme==='dark'?'light':'dark'
      localStorage.setItem('theme', state.theme);
    }

    // for testing purpose
    // addCityCountry: (state, action) => {
    //   (state.city = action.payload.city),
    //     (state.country = action.payload.country);
    // },
  },
});

export const { addLocation, setShowShimmer, setTheme } = appSlice.actions;
export default appSlice.reducer;
