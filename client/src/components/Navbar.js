import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import Logopic from "../images/logo_2.png";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tool">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid custum_nav">
          <NavLink className="navbar-brand" to="/">
            <img src={Logopic} alt="RAMM" className="logo"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
