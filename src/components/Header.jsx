import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/Header.css";
import Button from "./Button";

const Header = () => {
  const [query, setQuery] = useState("");
  return (
    <header>
      <nav className="maxWidth">
        <img src={logo} alt="logo" />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or id"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to={`/${query}`}>
            <Button label={"Search"} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
