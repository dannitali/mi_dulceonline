import React from 'react'
import Navbar from '../../componentes/navbar';
import SidebarContainer from '../../componentes/sidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import { Link } from 'react-router-dom';

const Salados = () => {
    return (
    
        <div className="wrapper" >
          <Navbar></Navbar>
          <SidebarContainer></SidebarContainer>
          <div className="content-wrapper" style={{backgroundColor:'white'}}>
            <ContentHeader
              ruta1={"/home"}
            />
    
    <section className="content">
          <div className="container-fluid">

          <div className="col-lg-3 col-6" style={{marginLeft: 30 , marginTop: -30}}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRaq46ws9yHxuiwqB3T5QK8TSy0LF6sb1N65r6Uee29pQYrJwxYCQbBEckMaJR-JcaTc&usqp=CAU"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Todo rico
                </h3>
                <p className="text-muted text-center">$15,000</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>
            



            <div className="col-lg-3 col-6" style={{marginLeft: 30}}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://disna.com.sv/wp-content/uploads/Piazza-Chocolate.png"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Piaza
                </h3>
                <p className="text-muted text-center">$12,000</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>



            <div className="col-lg-3 col-6"   style={{ marginLeft: 400, marginTop: -550 }}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://caprichoslatinos.com/peninsula/wp-content/uploads/2021/12/galletas-club-social.webp"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Club Social
                </h3>
                <p className="text-muted text-center">$3,000</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>



            <div className="col-lg-3 col-6" style={{ marginLeft: 400, marginTop:22 }}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://copservir.vtexassets.com/arquivos/ids/786825/MANI-MOTO-LIMON_F.png?v=637974405193900000"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Mani Moto
                </h3>
                <p className="text-muted text-center">$2,500</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>



            <div className="col-lg-3 col-6" style={{ marginLeft: 770, marginTop:-545 }}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://merkaplace.ca/2770-home_default/achiras-ramo.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Achiras
                </h3>
                <p className="text-muted text-center">$5,800</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>
        


        
            <div className="col-lg-3 col-6" style={{marginLeft: 770}}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://www.ramo.com.co/wp-content/uploads/2019/08/tostacos-producto-inferior.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Tostacos
                </h3>
                <p className="text-muted text-center">$3,000</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>
        
      
          
          
          </div>
        </section>
    
          </div>
          <Footer></Footer>
        </div>
      );
    };

export default Salados;