import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Market from './Market'
import Footer from './Footer'
import Header from './Header'


function Home() {
    return (
        <Container>
          <Header />
          <Hero />
          <Market />
          <Footer />
        </Container>
    )
}

export default Home

const Container=styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`
