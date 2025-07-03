import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <Gallery/>
      <Footer />
    </div>
  )
}

export default App