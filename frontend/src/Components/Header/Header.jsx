import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <h1>Netflix</h1>
        </div>
        {/* Navigation */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">Home</li>
            <li className="header__nav-item">TV Shows</li>
            <li className="header__nav-item">Movies</li>
            <li className="header__nav-item">My List</li>
          </ul>
        </nav>
        {/* Sign In Button */}
        <div className="header__actions">
          <button className="header__signin">Sign In</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
