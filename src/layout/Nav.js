import React from "react";
import { NavLink , Link } from "react-router-dom";
 
const Nav = (props) => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.link}
          </a>
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink to="/"  activeclassname="active" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="about"   className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="services"   className="nav-link">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="terms-conditio" className="nav-link">
              Terms & condition
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link">
             Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="login" className="nav-link">
              Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}; 

export default Nav;

 