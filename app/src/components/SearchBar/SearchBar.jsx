import React from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        placeholder="Search and play your games"
        type="text"
        name=""
        id=""
        className="search"
      />
      <div className="search-icon">
        <BiSearch color="#fff" fontSize="20px" />
      </div>
    </div>
  );
};

export default SearchBar;
