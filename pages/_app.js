import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/footer/footer.js'
import Cabecera2 from '../components/cabecera/cabecera2.js'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

function MyApp({ Component, pageProps }) {
  return <>
  
    <Head>
      <title>Padel Club 🥎 </title>
      <meta name="description" content="Padel Club" />
    </Head>

      <Cabecera2></Cabecera2>
      <Component {...pageProps} />
      <Footer></Footer>
  </>
}

export default MyApp

