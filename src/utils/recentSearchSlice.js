import { createSlice } from "@reduxjs/toolkit";

const recentSearchSlice = createSlice({
  name: "recentSearch",
  initialState: {
    searchData: [],
  },
  reducers: {
    addSearchData: (state, action) => {
      state.searchData.unshift(action.payload);
      state.searchData.splice(5, 1);
    },
  },
});

export const { addSearchData } = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
