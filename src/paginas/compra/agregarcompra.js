import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import APIInvoke  from '../../utils/APIInvoke';

const Agregarcompra = () => {

        const [pedidos, setPedidos] = useState({
          
          nombre: "",
          email: "",
          cantidad: "",
          direccion: "",
          barrio : "",
          telefono: ""

        });
      
        const { nombre, email, cantidad, direccion, barrio, telefono} = pedidos;
      
        const onChange = (e) => {
          setPedidos({
            ...pedidos,
            [e.target.name]: e.target.value,
          });
        };
      
        //funcion tipo flecha
        const Comprar = async () => {
          if (telefono.length < 10) {
            const msg = "el telefono debe tener minimo 10 digitos ";
            swal({
              title: "Error",
              text: msg,
              icon: "error",
              buttons: {
                confirm: {
                  text: "ok",
                  value: "true",
                  visible: "true",
                  className: "btn btn-danger",
                  closeModel: true,
                },
              },
            });
          } else {
            const data = {
              nombre: pedidos.nombre,
              email: pedidos.email,
              cantidad: pedidos.cantidad,
              direccion: pedidos.direccion,
              barrio: pedidos.barrio,
              telefono: pedidos.telefono
            };
            const response = await APIInvoke.invokePOST("/pedidos", data);
      
            setPedidos({
              nombre: "",
              email: "",
              cantidad: "",
              direccion: "",
              barrio : "",
              telefono : ""
              
            })
          }
        };
      
        const onSubmit = (e) => {
          e.preventDefault();
          Comprar();
        };

  return (
    <div class="hold-transition register-page">
    <div className="register-box">
      <div className="register-logo">
        <Link to={"#"}>
          <b>Agregar Compra</b>
        </Link>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Bienvenido ingrese sus datos</p>

          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Cantidad"
                id="cantidad"
                name="cantidad"
                value={cantidad}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>


            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Direccion"
                id="direccion"
                name="direccion"
                value={direccion}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Barrio"
                id="barrio"
                name="barrio"
                value={barrio}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Telefono"
                id="telefono"
                name="telefono"
                value={telefono}
                onChange={onChange}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>

            <div class="social-auth-links text-center">
              <button type="submit" className="btn btn-block btn-primary">
                Confirmar Compra
              </button>
              <Link to={"/home"} class="btn btn-block btn-primary">
                Atras
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}



export default Agregarcompra