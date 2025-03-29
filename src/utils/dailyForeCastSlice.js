import { createSlice } from "@reduxjs/toolkit";

const dailyForeCastSlice = createSlice({
    name: "dailyForeCast",
    initialState: {
        dailyForeCastData: []
    },
    reducers: {
        addDailyForeCastData: (state,action) => {
            state.dailyForeCastData = action.payload
        }
    }
})

export const {addDailyForeCastData} = dailyForeCastSlice.actions;
export default dailyForeCastSlice.reducer;