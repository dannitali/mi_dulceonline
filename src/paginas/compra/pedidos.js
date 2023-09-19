import React, { useEffect, useState } from 'react'
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import apiBD from '../../apiBD.json';
import { Link } from "react-router-dom";
import Navbar from '../../componentes/navbar';
import SidebarContainer from '../../componentes/sidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';


const Pedidos = () => {
 // Declarar un estado para almacenar los datos de los tickets
 const [pedidos, setPedidos] = useState([]);
  
 
 useEffect(() => {
   // Extraer los datos de "productos" del archivo JSON
   const Data = apiBD.pedidos || [];
    // Realizar una transformación para establecer "null" en lugar de cadenas vacías
    
  const transformedPedidos = Data.map((pedido) => {
    return {
      ...pedido
    };
  });

  setPedidos(transformedPedidos);
}, []);
  

  

return (
  <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
      <ContentHeader titulo={"Listado de Pedidos"} ruta1={"/home"} />

     &nbsp;
      &nbsp;

      <section className="content">
        <div className="container-fluid">
          <table className="table">
            <thead style={{ backgroundColor: "DarkBlue", color: "white" }}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Direccion</th>
                <th scope="col">Barrio</th>
                <th scope="col">Telefono</th>

              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {pedido.id} 
                    </td>
                    <td>
                    {pedido.nombre} 
                    </td>
                    <td>
                     {pedido.email} 
                    </td>
                    <td>
                     {pedido.cantidad} 
                    </td>
                    <td>
                     {pedido.direccion} 
                    </td>
                    <td>
                     {pedido.barrio} 
                    </td>
                    <td>
                     {pedido.telefono} 
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
export default Pedidos