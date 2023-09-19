import React, { useState } from "react";
import { Link } from "react-router-dom";
import APPInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {
  const [clientes, setClientes] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const { nombre, email, direccion, password } = clientes;

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  //funcion tipo flecha
  const crearCuenta = async () => {
    if (password.length < 6) {
      const msg = "la contraseña debe tener minimo 6 caracteres ";
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
        nombre: clientes.nombre,
        email: clientes.email,
        password: clientes.password
      };
      const response = await APPInvoke.invokePOST("/clientes", data);

      setClientes({
        nombre: "",
        email: "",
        password: ""
        
      })
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };

  return (
    <div class="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <Link to={"#"}>
            <b>Registro de cuenta</b>
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
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div class="social-auth-links text-center">
                <button type="submit" className="btn btn-block btn-primary">
                  Crear Cuenta
                </button>
                <Link to={"/login"} class="btn btn-block btn-primary">
                  Regresar al login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
