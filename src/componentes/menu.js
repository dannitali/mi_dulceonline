import React from "react";
import { Link } from "react-router-dom";
import "../apiBD.json";

const Menu = () => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
        style={{ backgroundColor: "DarkBlue" }}
      >
        &nbsp; &nbsp; &nbsp;
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Inicio
              <span className="right badge badge-danger"></span>
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/productos"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Productos
              <span className="right badge badge-danger"></span>
            </p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/pedidos"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Pedidos
              <span className="right badge badge-danger"></span>
            </p>
          </Link>
        </li>
       
        &nbsp; &nbsp; &nbsp;
        <li className="nav-header">
          <h5>Categorias</h5>
        </li>
        <li className="nav-item">
          <Link to={"/dulces"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Dulces
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/salados"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Salados
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/acidos"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Acidos
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        &nbsp; &nbsp;
        <li className="nav-header">
          <h5>Otros Productos </h5>
        </li>
        <li className="nav-item">
          <Link to={"/licores"} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Otros
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
        </li>
        &nbsp;
      
      </ul>
    </nav>
  );
};

export default Menu;
