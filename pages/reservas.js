import Head from 'next/head'
import Cabecera from '../components/cabecera/cabecera.js'
import Cabecera2 from '../components/cabecera/cabecera2'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer.js'
import CalendarioReservas from '../components/reservas/calendario-reservas'


export default function Reservas() {
  return (
    <div>
    

      <main>
      
        <CalendarioReservas></CalendarioReservas>
       
      </main>
      
    
    </div>
  )
}
