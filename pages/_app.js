import '../styles/global.css'
import Layout from '../components/Layout'
function App({ Component, pageProps }) {
  return <div>
     <Component {...pageProps} />
  </div>
}

export default App