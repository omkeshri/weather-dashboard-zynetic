import { createSlice, current } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
    name: "currentWeather",
    initialState: {
        
    },
    reducers: {
        addCurrentWeatherData:(state,action) => {
            state.currentWeatherData = action.payload;
            // console.log(state.currentWeatherData)
        }
    }
})

export const {addCurrentWeatherData} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;