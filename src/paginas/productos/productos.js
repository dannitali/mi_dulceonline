import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/navbar";
import SidebarContainer from "../../componentes/sidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";

import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import apiBD from '../../apiBD.json';
import { Link } from "react-router-dom";

const Productos = () => {


   // Declarar un estado para almacenar los datos de los tickets
   const [productos, setProductos] = useState([]);
  
 
   useEffect(() => {
     // Extraer los datos de "productos" del archivo JSON
     const Data = apiBD.productos || [];
      // Realizar una transformación para establecer "null" en lugar de cadenas vacías
      
    const transformedTickets = Data.map((producto) => {
      return {
        ...producto
      };
    });

    setProductos(transformedTickets);
  }, []);
    

    //ELIMINAR
  const cargarProductos = async () => {
    const response = await APIInvoke.invokeGET("/productos");
    //console.log(response.usurio);
    setProductos(response.productos);
  };


  const eliminarProducto = async (e, id) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/productos/${id}`);

    if (response.msg === "Producto Eliminado") {
      const msg = "El producto fue eliminado correctamente.";
      swal({
        title: "Información",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "okey",
            value: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      cargarProductos();
    } else {
      const msg = "El producto no fue borrado correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "okey",
            value: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <ContentHeader titulo={"Listado de Productos"} ruta1={"/home"} />

      

       <Link to={"/agregarproducto"} type="submit" class="btn btn-link" style={{marginLeft:20}}>
        Agregar
        </Link>
       &nbsp;
        &nbsp;

        <section className="content">
          <div className="container-fluid">
            <table className="table">
              <thead style={{ backgroundColor: "DarkBlue", color: "white" }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>

              <tbody>
                {productos.map((producto, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {producto.id} 
                      </td>
                      <td>
                      {producto.nombre} 
                      </td>
                      <td>
                       {producto.valor} 
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary">
                          Editar
                        </button>
                        &nbsp; &nbsp; &nbsp;
                        <button
                          onClick={(e) => eliminarProducto(e, producto.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Productos;
