import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Animal Memory Game!</h1>
    <h2>
      To start the game click on an animal. For each animal you click you will earn 1 point, but don't click an animal twice!
    </h2>
  </header>
);

export default Header;
