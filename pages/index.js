import NextJsCarousel from '../components/carrusel/carrusel.js'
import Banners from '../components/Banners/banners.js'
import Galeria from '../components/galeria-imagenes/galeria.js'
import Valores from '../components/valores/valores.js'
import Noticias from '../components/noticias/noticias.js'


export default function Home() {
  return (
  
      <main>
        <NextJsCarousel></NextJsCarousel>
        <Banners></Banners>
        <Noticias></Noticias>
        <Galeria></Galeria>
        <Valores></Valores>
      </main>
      
    
  )
}
