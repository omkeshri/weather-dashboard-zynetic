import { createSlice } from "@reduxjs/toolkit";

const dailyForeCastSlice = createSlice({
    name: "dailyForeCast",
    initialState: {
        dailyForeCastData: []
    },
    reducers: {
        addDailyForeCaseData: (state,action) => {
            state.dailyForeCastData = action.payload
        }
    }
})

export const {addDailyForeCaseData} = dailyForeCastSlice.actions;
export default dailyForeCastSlice.reducer;