import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleSearch = (searchText) => {
    console.log("Search for:", searchText);
  };

  return (
    <header>
      <h3>CARS DataSet</h3>
      <SearchBar handleSearch={handleSearch} /> {}
      <nav ref={navRef}>
       
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
