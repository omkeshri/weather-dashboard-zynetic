import { createSlice } from "@reduxjs/toolkit";

const recentSearchSlice = createSlice({
    name: "recentSearch",
    initialState: {
        searchData: []
    }, 
    reducers: {
        addSearchData: (state, action) => {
            state.searchData = action.payload
        }
    }
})

export const {addSearchData} = recentSearchSlice.actions;
export default recentSearchSlice.reducer;