import styled from 'styled-components'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import ScrollToTop from "react-scroll-to-top";
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <ScrollToTop className="scrollToTop" smooth color="black" />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
