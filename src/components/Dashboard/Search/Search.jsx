import { handleRefresh, handleSearch } from "../../../utils/handleSearch";
import { useDispatch, useSelector } from "react-redux";
import { HiRefresh } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import SearchButton from "./SearchButton";
import React, { useState } from "react";

const Search = ({ setError }) => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState("");
  const { lat, lon, theme: currentTheme } = useSelector((store) => store.app);
  const recentSearch = useSelector((store) => store.recentSearch.searchData);

  return (
    <div className="w-full flex">
      <input
        type="text"
        className={`w-full ${
          currentTheme === "dark"
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-gradient-to-br from-blue-200 to-gray-300 font-medium hover:bg-gradient-to-br hover:from-blue-300 hover:to-gray-300"
        } rounded-2xl focus:outline-none px-3 py-2 2xl:py-1 text-xs`}
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      ></input>
      <SearchButton
        icon={<HiRefresh className="scale-125" />}
        click={() => handleRefresh(dispatch, setError, lat, lon, setSearchCity)}
      />
      <SearchButton icon={<FaSearch />} click={() => handleSearch(dispatch, searchCity, setSearchCity, setError, recentSearch)} />
    </div>
  );
};

export default Search;
