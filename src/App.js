
import React, {Fragment} from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/crearcuenta";
import Home from "./paginas/home";
import Productos from "./paginas/productos/productos";
import Dulces from "./paginas/categorias/dulces";
import Salados from "./paginas/categorias/salados";
import Acidos from "./paginas/categorias/acidos";
import Licores from "./paginas/categorias/licores";
import Agregarcompra from "./paginas/compra/agregarcompra";
import Agregarproducto from "./paginas/productos/agregarproducto";
import Pedidos from "./paginas/compra/pedidos";
import Home2 from "./paginas/home2";



function App() {
  return (
    <Fragment>
 <Router>
  
   <Routes>
     <Route path="/login" exact element={<Login/>}/>
     <Route path="/crearcuenta" exact element={<CrearCuenta/>}/>
     <Route path="/home" exact element={<Home/>}/>
     <Route path="/productos" exact element={<Productos/>}/>
     <Route path="/pedidos" exact element={<Pedidos/>}/>
     <Route path="/dulces" exact element={<Dulces/>}/>
     <Route path="/salados" exact element={<Salados/>}/>
     <Route path="/acidos" exact element={<Acidos/>}/>
     <Route path="/licores" exact element={<Licores/>}/>
     <Route path="/agregarcompra" exact element={<Agregarcompra/>}/>
     <Route path="/agregarproducto" exact element={<Agregarproducto/>}/>
     <Route path="/home2" exact element={<Home2/>}/>


   </Routes>
 </Router>
</Fragment>
  );
}

export default App;
