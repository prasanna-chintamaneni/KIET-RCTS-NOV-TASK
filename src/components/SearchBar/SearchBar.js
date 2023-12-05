import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    // Call the handleSearch function and pass the searchText
    const result = handleSearch(searchText);

    if (!result) {
      // Item not found: Show an alert popup
      alert('Item not found.');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
