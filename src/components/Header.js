import React from "react";
import BrandLogo from "../assets/BookShelf-icon.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="brandLogo">
        <img src={BrandLogo} alt="logo" />
        <div className="brandName">
          <div className="firstName">Personal</div>
          <div className="lastName">BookShelf</div>
        </div>
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navActive" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/bookshelf"
          className={({ isActive }) => (isActive ? "navActive" : "")}
        >
          My Bookshelf
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
