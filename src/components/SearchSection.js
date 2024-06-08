import React from "react";
import { IoSearchCircle, IoClose } from "react-icons/io5";

const SearchSection = ({ query, setQuery, handleSearch }) => {

  return (
    <div className="searchBackground">
      <h3>Find your book of choice</h3>
      <p className="para">
        Whether you're searching for a timeless classic, exploring new releases,
        or diving into niche genres, our extensive collection has something for
        every reader. Happy reading!
      </p>
      <search>
        <form action="./search/">
          <input
            type="search"
            id="movie"
            name="q"
            value={query}
            onChange={handleSearch}
            placeholder="Search Your Favorite Book..."
          />
          {query && (
            <button className="close-btn" onClick={() => setQuery("")}>
              <IoClose />
            </button>
          )}
          <button className="search-btn" type="submit" disabled>
            <IoSearchCircle />
          </button>
        </form>
      </search>
    </div>
  );
};

export default SearchSection;
