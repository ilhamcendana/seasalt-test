/** Frameworks */
import { Fragment } from 'react'
/** Global Style */
import '../styles/globals.css'
/** Components */
import Navbar from '@components/navbar'
import Footer from '@components/footer'

/** Component */
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <div className='pt-[72px]'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Fragment>
  )
}

export default MyApp
