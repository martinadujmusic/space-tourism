import { NavLink } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import hamburgerClosed from "/assets/shared/icon-hamburger.svg";
import hamburgerOpen from "/assets/shared/icon-close.svg";
import { useState } from "react";
import "./index.css";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <nav className="navigation">
      {/* LOGO */}

      <a href="#">
        <img src={logo} alt="Space-Logo" className="logo" />
      </a>
      <span className="line"></span>

      {/*NAVIGATION MENU*/}

      <ul className={open ? "nav-menu open" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            <span className="nav-num">00</span>
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            <span className="nav-num">01</span>
            Destination
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            <span className="nav-num">02</span>
            Crew
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            <span className="nav-num">03</span>
            Technology
          </NavLink>
        </li>
      </ul>

      <button onClick={(e) => handleClick(e)} className="nav-button">
        {open ? (
          <img
            className="hamburger-open"
            src={hamburgerOpen}
            alt="Open Hamburger icon"
          />
        ) : (
          <img
            className="hamburger-closed"
            src={hamburgerClosed}
            alt="Closed Hamburger icon"
          />
        )}
      </button>
    </nav>
  );
}

export default NavigationBar;
