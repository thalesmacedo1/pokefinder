import React from "react";
import pokeFinderLogo from "../../images/pokefinder.png";

import "./styles.css";

const Header = () => {
  return (
    <nav className="navbar justify-content-center">
        <a href="/" className="navbar-brand">
          <img src={pokeFinderLogo} alt="PokeFinder Logo" />
        </a>
    </nav>
  );
};

export default Header;
