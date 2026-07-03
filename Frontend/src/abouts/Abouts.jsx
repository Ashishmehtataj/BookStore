import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About'

function Abouts() {
  return (
    <div>
       <Navbar/> 
       <div>
        <About/>
       </div>
       <Footer/>
    </div>
  )
}

export default Abouts
