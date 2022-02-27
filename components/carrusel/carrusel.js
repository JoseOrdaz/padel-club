import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.css' 
import Image from 'next/image'


const getConfigurableProps = () => ({
    
    showThumbs: false,
    showStatus: false,
});


  
export default class NextJsCarousel extends Component {
    render( ) {
        
        return (
          
          <div>
          
              <Carousel {...getConfigurableProps()}>
                 
              <div>

                      <img src="../images/carrusel/carrusel1.jpg" alt="image1"/>
                     
                        <div className="intro-carrusel absolute sm:max-w-lg">
                        <h1 className=" text-4xl font font-extrabold tracking-tight text-[#fff] sm:text-6xl">ALQUILA TU PISTA DE PÁDEL</h1>
                        <p className="mt-4 mb-4 text-xl text-[#fff]">JUEGA EN TU CLUB OFICIAL WPT</p>
                        <a href="reservas" className="inline-block text-center bg-[#0e46af] hover:text-[#0e46af] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-[#fff]">Reserva tu pista</a>
                        </div>
                     
  
                  </div>
                  <div>
                      <img src="../images/carrusel/carrusel2.jpg" alt="image2" />
                      <div className="intro-carrusel absolute sm:max-w-lg">
                        <h1 className=" text-4xl font font-extrabold tracking-tight text-[#fff] sm:text-6xl">ALQUILA TU PISTA DE PÁDEL</h1>
                        <p className="mt-4 mb-4 text-xl text-[#fff]">JUEGA EN TU CLUB OFICIAL WPT</p>
                        <a href="reservas" className="inline-block text-center bg-[#0e46af] hover:text-[#0e46af] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-[#fff]">Reserva tu pista</a>
                      </div>
  
                  </div>
                  <div>
                      <img src="../images/carrusel/carrusel3.jpg" alt="image3"/>
                      <div className="intro-carrusel absolute sm:max-w-lg">
                        <h1 className=" text-4xl font font-extrabold tracking-tight text-[#fff] sm:text-6xl">ALQUILA TU PISTA DE PÁDEL</h1>
                        <p className="mt-4 mb-4 text-xl text-[#fff]">JUEGA EN TU CLUB OFICIAL WPT</p>
                        <a href="reservas" className="inline-block text-center bg-[#0e46af] hover:text-[#0e46af] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-[#fff]">Reserva tu pista</a>
                      </div>
  
                  </div>
                  <div>
                      <img src="../images/carrusel/carrusel4.jpg" alt="image4"/>
                      <div className="intro-carrusel absolute sm:max-w-lg">
                        <h1 className=" text-4xl font font-extrabold tracking-tight text-[#fff] sm:text-6xl">ALQUILA TU PISTA DE PÁDEL</h1>
                        <p className="mt-4 mb-4 text-xl text-[#fff]">JUEGA EN TU CLUB OFICIAL WPT</p>
                        <a href="reservas" className="inline-block text-center bg-[#0e46af] hover:text-[#0e46af] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-[#fff]">Reserva tu pista</a>
                      </div>
  
                  </div>
                  <div>
                      <img src="../images/carrusel/carrusel5.jpg" alt="image5"/>
                      <div className="intro-carrusel absolute sm:max-w-lg">
                        <h1 className=" text-4xl font font-extrabold tracking-tight text-[#fff] sm:text-6xl">ALQUILA TU PISTA DE PÁDEL</h1>
                        <p className="mt-4 mb-4 text-xl text-[#fff]">JUEGA EN TU CLUB OFICIAL WPT</p>
                        <a href="reservas" className="inline-block text-center bg-[#0e46af] hover:text-[#0e46af] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-[#fff]">Reserva tu pista</a>
                      </div>
  
                  </div>
              </Carousel>
            </div>



        );

    }

    
};