import React from 'react'
import Navbar from '../../componentes/navbar';
import SidebarContainer from '../../componentes/sidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import { Link } from 'react-router-dom';

const Dulces = () => {
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
                src="https://d1cft8rz0k7w99.cloudfront.net/n/9/2/d/f/92df12370f13d300a6c4332e1e9a1a68e3706f45_Candy_342369_05.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Nucita
                </h3>
                <p className="text-muted text-center">$4,000</p>
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
                src="https://i0.wp.com/elohimmarket.com/wp-content/uploads/2021/08/Dulce-Barrilete-50-unidades.jpg?fit=1000%2C1000&ssl=1"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Barrilete
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
                src="https://i.pinimg.com/236x/8e/70/b1/8e70b18cbbf0eb65b62b370b384a99a3.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  BomBonBum
                </h3>
                <p className="text-muted text-center">$7,500</p>
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
                src="https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_quipitos_5u_40gr_pops_dulceria_1024x1024.jpg?v=1620489146"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Quipitos
                </h3>
                <p className="text-muted text-center">$10,500</p>
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
                src="https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/7/7702007512007_42.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Chocolatina Jet
                </h3>
                <p className="text-muted text-center">$8,500</p>
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
                src="https://static.vecteezy.com/system/resources/previews/012/998/148/non_2x/kharkov-ukraine-december-8-2020-oreo-sandwich-cookies-box-on-white-background-oreo-is-goods-manufactured-by-nabisco-division-of-mondelez-international-free-photo.JPG"
                height={150}
                width={150}
              />
                <h3 className="profile-username text-center">
                 Galletas Oreo
                </h3>
                <p className="text-muted text-center">$9,000</p>
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

export default Dulces;