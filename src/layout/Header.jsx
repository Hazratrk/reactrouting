import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <header style={{ padding: "10px", background: "#eee" }}>
      <NavLink to="/" style={linkStyle}>Home Page</NavLink>
      <NavLink to="/books" style={linkStyle}>Books</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
    </header>
  );
}

export default Header;
