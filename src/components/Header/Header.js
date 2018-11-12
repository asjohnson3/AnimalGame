import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Animal Memory Game!</h1>
    <h2>
      See how many images you can correctly remember. By clicking on each image you will earn a point, however do not click an image twice or your score will reset to 0!
    </h2>
  </header>
);

export default Header;
