import { createSlice } from "@reduxjs/toolkit";

const recentSearchSlice = createSlice({
  name: "recentSearch",
  initialState: {
    searchData: [],
  },
  reducers: {
    addSearchData: (state, action) => {
      const cityExist = state.searchData.some(
        (item) => item.city === action.payload.city
      );
      if (!cityExist) state.searchData.unshift(action.payload);
    },
  },
});

export const { addSearchData } = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
