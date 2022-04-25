import React from 'react'

import Navbar from './components/navbar/Navbar'
import Principal from './pages/principal/Principal'
import About from './pages/about/About'
import Explore from './pages/explore/Explore'
import Journal from './pages/journal/Journal'
import Contact from './pages/contact/Contact'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './App.css'

function App() {
  AOS.init()
  return (
    <div className="App">
      <Navbar />
      <section id="principal">
        <Principal />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="explore">
        <Explore />
      </section>
      <section id="journal">
        <Journal />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="footer">
        <div className="message_copyright">
          Copyright (c) 2022 Putitos corporations - All Reserved
        </div>
      </footer>
    </div>
  )
}

export default App
