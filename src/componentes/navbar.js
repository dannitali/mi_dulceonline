import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"#"} className="nav-link" data-widget="pushmenu"  role="button">
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="../../login" className="nav-link">
            Salir
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"#"}
            className="nav-link"
            data-widget="navbar-search"
          
            role="button"
          >
            <i className="fas fa-search" />
          </Link>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item">
          <Link to={"#"}
            className="nav-link"
            data-widget="fullscreen"
           
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
