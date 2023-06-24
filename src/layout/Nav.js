import React from "react";
import { NavLink , Link } from "react-router-dom";
 
const Nav = (props) => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            {props.link}
          </a>
          <ul class="navbar-nav">

            <li class="nav-item">
              <NavLink to="/"  activeclassname="active" className="nav-link">
                Home
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink to="about"   className="nav-link">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="services"   className="nav-link">
                Service
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="terms-conditio" className="nav-link">
              Terms & condition
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="contact" className="nav-link">
             Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}; 

export default Nav;

 