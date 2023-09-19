import React from 'react'
import Navbar from '../../componentes/navbar';
import SidebarContainer from '../../componentes/sidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';

const Licores = () => {
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
                <div className="img-lg">
                   <img
                    src="https://1.bp.blogspot.com/-K14yJCwBxhE/UW3E5JeNyfI/AAAAAAAAAA0/Y8-rvynk3QU/s1600/aguardienteFLA%5B1%5D.jpg"
                    width={180}
                    height={180}
                    style={{ marginLeft: 80 , marginTop:-30}}
                  />
                </div>
              </div>
            </section>
    
            <section className="content">
              <div className="container-fluid">
              <div className="img-lg">
                  <img
                    src="https://ditexcon.com.co/wp-content/uploads/2019/03/Cocosette_530x@2x.jpg"
                    width={180}
                    height={180}
                    style={{ marginLeft: -17 , marginTop: 220 }}
                  />
                </div>
              </div>
            </section>
    
    
            <section className="content">
              <div className="container-fluid">
              <div className="img-lg">
                  <img
                    src="https://m.media-amazon.com/images/I/71WyAONGE0L.jpg"
                    width={180}
                    height={180}
                    style={{ marginLeft: 150 , marginTop: 220 }}
                  />
                </div>
              </div>
            </section>
    
    
            <section className="content">
              <div className="container-fluid">
              <div className="img-lg">
                  <img
                    src="https://colombianproducts.co/wp-content/uploads/2017/11/PrCol-DU028.jpg"
                    width={200}
                    height={180}
                    style={{ marginLeft: 320 , marginTop: 220 }}
                  />
                </div>
              </div>
            </section>
    
    
            <section className="content">
              <div className="container-fluid">
                <div className="img-lg">
                   <img
                    src="https://copservir.vtexassets.com/arquivos/ids/763098/PONY-MALTA_F.png?v=637950264379470000"
                    width={180}
                    height={180}
                    style={{ marginLeft: -50 , marginTop:-30}}
                  />
                </div>
              </div>
            </section>
    
    
            <section className="content">
              <div className="container-fluid">
                <div className="img-lg">
                   <img
                    src="https://copservir.vtexassets.com/arquivos/ids/766687-800-auto?v=637950282496730000&width=800&height=auto&aspect=true"
                    width={200}
                    height={180}
                    style={{ marginLeft: 120 , marginTop:-30}}
                  />
                </div>
              </div>
            </section>
    
          </div>
          <Footer></Footer>
        </div>
      );
    };
export default Licores;