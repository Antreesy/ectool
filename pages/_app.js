import Navbar from '../components/Navbar'
import '../styles/globals.css'

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  ) 
}

export default CustomApp
