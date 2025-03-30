import React from "react";
import { useSelector } from "react-redux";

const SearchButton = ({ icon, click }) => {
    const currentTheme  = useSelector((store) => store.app.theme);
  return (
      <button
        className={`${
          currentTheme === "dark"
            ? "bg-gray-950 hover:bg-gray-800"
            : "bg-gradient-to-br from-blue-200 to-gray-300 font-medium hover:bg-gradient-to-br hover:from-blue-300 hover:to-gray-300"
        } ml-1 text-xs px-4 rounded-full  cursor-pointer py-1 hover:rotate-12`}
        onClick={() => click()}
      >
        {icon}
      </button>
  );
};

export default SearchButton;
