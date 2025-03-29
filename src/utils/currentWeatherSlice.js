import { createSlice, current } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
    name: "currentWeather",
    initialState: {
        
    },
    reducers: {
        addCurrentWeatherData:(state,action) => {
            state.currentWeatherData = action.payload;
        }
    }
})

export const {addCurrentWeatherData} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;