import React from "react";
import Menu from "./menu";
import Logo from "../../node_modules/admin-lte/dist/img/AdminLTELogo.png";
import { Link } from "react-router-dom";

const SidebarContainer = () => {
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ backgroundColor: "DarkBlue" }}
    >
      <Link to={"/home"} className="brand-link" style={{ marginTop: 30 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png"
          className="brand-image  elevation-2"
          style={{ opacity: ".8", marginLeft: 3 }}
          width={45}
          height={45}
        />
        <span className="brand-text font-weight-light">Dulces Colombianos</span>
      </Link>
      <div className="sidebar">
        <Menu></Menu>
      </div>
    </aside>
  );
};

export default SidebarContainer;
