import React from 'react'
import { Link } from 'react-router-dom';

const Menu2 = () => {
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
              <Link to={""} className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Inicio
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
            <li className="nav-item">
              <Link to={"/agregarcompra"} className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Realizar Compra
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      );
    };

export default Menu2