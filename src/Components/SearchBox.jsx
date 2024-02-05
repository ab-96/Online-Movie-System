import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

const SearchBox = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHoverStyle = () => {
    setIsHovered(!isHovered);
  };

  const getSearchInput = (event) => {
    const searchTerm = event.target.value;
    props.getSearch(searchTerm);
  };
  return (
    <section className="flex justify-between">
      <div
        className="relative rounded-full w-96 flex items-center justify-center drop-shadow-md mb-24 mt-10 ml-72 "
        onMouseEnter={toggleHoverStyle}
        onMouseLeave={toggleHoverStyle}
        onChange={getSearchInput}
      >
        <input
          type="text"
          onChange={getSearchInput}
          placeholder="Search to find your movie..."
          className="w-full pl-10 pr-4 py-4 rounded-full outline-none font-nunito text-left bg-lBlue hover:bg-white transition duration-300 ease-in-out"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: isHovered ? "black" : "white" }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 "
        />
      </div>
      <Filter getGenre={props.getGenre} genre={props.genre} />
    </section>
  );
};

export default SearchBox;
