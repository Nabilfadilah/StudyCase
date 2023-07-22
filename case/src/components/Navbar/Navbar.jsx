import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm shadow-lg navbar-white text-white px-5 rounded">
        <i className="navbar-brand bi bi-justify fs-4 text-white me-4"></i>

        <div className="collapse navbar-collapse">
          <a href="">
            <i className="bi bi-bell-fill text-white me-4"></i>
          </a>
          <a href="">
            <i className="bi bi-envelope-fill text-white"></i>
          </a>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown md-4">
              <a className="nav-link dropdown-toggle me-2 text-white" href="">
                Admin
              </a>
            </li>
          </ul>

          <a className="list-group-item py-2">
            <a href="">
              <i className="bi bi-person text-white fs-5 me-5"></i>
            </a>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
