import React from 'react'
import Navbar from '../../componentes/navbar';
import SidebarContainer from '../../componentes/sidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import { Link } from 'react-router-dom';

const Acidos = () => {
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
                src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/inline-images/su%CC%81per%20hi%CC%81per%20a%CC%81cido.jpeg"
                height={100}
                width={80}
              />
                <h3 className="profile-username text-center">
                  Polvo Super Hiper Acido
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
                src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1348168048/project-covers/000/060/330/60330-original-82822-original-199SHAcidoSourGumWatermelon_241_231_100.jpg?1348168048"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Chicle Super Hiper Acido
                </h3>
                <p className="text-muted text-center">$8,000</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>



            <div className="col-lg-3 col-6"   style={{ marginLeft: 400, marginTop: -580 }}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://http2.mlstatic.com/D_NQ_NP_760682-MCO52703735687_122022-O.webp"
                height={90}
                width={90}
              />
                <h3 className="profile-username text-center">
                  Revolcon
                </h3>
                <p className="text-muted text-center">$6,300</p>
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
                src="https://domain.distrilabendicion.com/79424ad3f7b34e92b33af5309d990477/_bill/_thumbs/1960_1980_zoom_max-sour-acidos.jpeg"
                height={100}
                width={100}
              />
                <h3 className="profile-username text-center">
                  Max Acidos
                </h3>
                <p className="text-muted text-center">$9,500</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>



            <div className="col-lg-3 col-6" style={{ marginLeft: 770, marginTop:-563 }}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://compre-mas.com/wp-content/uploads/2022/03/SPLOT-ACIDO-LINEA.webp"
                height={115}
                width={115}
              />
                <h3 className="profile-username text-center">
                  Chicles splot
                </h3>
                <p className="text-muted text-center">$5,000</p>
                <Link to={"/agregarcompra"} className="btn btn-block" style={{backgroundColor:"DarkBlue" , color:'white'}}>
                  <b>Comprar</b>
                </Link>
              </div>
            </div>
            </div>
            </div>
        


        
            <div className="col-lg-3 col-6" style={{marginLeft: 770, marginTop : 15}}>
              <div className="card card-primary " >
                <div className="card-body ">
                  <div className="text-center">
              <img
           className=" img-fluid"
                src="https://licoresquindio.com/wp-content/uploads/2020/05/Choclitos_Limon-230grs-Licores_Quindio.jpg"
                height={80}
                width={80}
              />
                <h3 className="profile-username text-center">
                  Choclitos
                </h3>
                <p className="text-muted text-center">$2,500</p>
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

export default Acidos