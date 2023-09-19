import React from "react";
import Navbar from "../componentes/navbar";
import SidebarContainer from "../componentes/sidebarContainer";
import ContentHeader from "../componentes/ContentHeader";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
import SidebarContainer2 from "../componentes/sidebarContainer2";
import Navbar2 from "../componentes/navbar2";

const Home2 = () => {
  return (
    <div className="wrapper">
      <Navbar2></Navbar2>
      <SidebarContainer2></SidebarContainer2>
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <ContentHeader ruta1={"/home"} />

        <section className="content">
          <div className="container-fluid">

          <div className="col-lg-3 col-6" style={{marginLeft: 30 , marginTop: -30}}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://copservir.vtexassets.com/arquivos/ids/787693/BARRA-SUPERCOCO-CHOCOSNACKE_F.png?v=637989094714100000"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Super Coco
                </h3>
                <p className="text-muted text-center">$10,000</p>
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
                src="https://mistiendas.com.co/1052-large_default/arequipe-500g.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Arequipe
                </h3>
                <p className="text-muted text-center">$8,000</p>
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
                src="https://d1cft8rz0k7w99.cloudfront.net/n/b/6/2/6/b6264940b04a34074b8c2f2c67aef2c62015487a_Candy_186091_02.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Sparkies
                </h3>
                <p className="text-muted text-center">$5,000</p>
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
                src="https://d1cft8rz0k7w99.cloudfront.net/n/3/2/e/c/32eccb545968729fe29056ca3a6f47641d5b8150_SnackCakes_316452_02.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Chocorramo
                </h3>
                <p className="text-muted text-center">$9,500</p>
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
                src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/inline-images/frunas.jpeg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Frunas
                </h3>
                <p className="text-muted text-center">$6,000</p>
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
                src="https://domain.distrilabendicion.com/79424ad3f7b34e92b33af5309d990477/_bill/_thumbs/352_341_zoom_oka-loka-chicle-fusion.jpg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Bon Bon Bum x 24
                </h3>
                <p className="text-muted text-center">$5,000</p>
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

export default Home2;
