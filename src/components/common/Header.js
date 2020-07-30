import React from "react";
import { NavLink } from "react-router-dom";
import "../../resources/reset.css";

function Header() {
  const activeStyle = {};
  const style = {
  };
  return (
    <>
      <nav
        style={{
        }}
      >
        <NavLink style={style} activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/about">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
