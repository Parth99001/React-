import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // Import Bootstrap JS
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Slider from './components/Slider'

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Footer/>
    </>
  )
}

export default App
