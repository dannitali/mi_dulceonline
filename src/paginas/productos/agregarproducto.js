import React, { useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import { Link } from 'react-router-dom';

const Agregarproducto = () => {

    const [productos, setProductos] = useState({
          
        nombre: "",
        valor: ""

      });
    
      const { nombre,  valor} = productos;
    
      const onChange = (e) => {
        setProductos({
          ...productos,
          [e.target.name]: e.target.value,
        });
      };
    
      //funcion tipo flecha
      const Comprar = async () => {
       
          const data = {
            nombre: productos.nombre,
            valor:productos.valor
          };

          const response = await APIInvoke.invokePOST("/productos", data);
    
          setProductos({
            nombre: "",
            valor:""
            
          })
        }
    
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
              type="text"
              className="form-control"
              placeholder="Valor"
              id="valor"
              name="valor"
              value={valor}
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
              Agregar Producto
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
export default Agregarproducto