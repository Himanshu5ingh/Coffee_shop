import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About'
import Gallery from './Component/Gallery'
import Service from './Component/Service'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/services' element={<Service />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App