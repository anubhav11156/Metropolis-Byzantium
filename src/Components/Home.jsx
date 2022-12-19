import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'

function Home() {
    return (
        <Container>
          <BgGradiance></BgGradiance>
          <Hero />
        </Container>
    )
}

export default Home

const Container=styled.div`
  background-color: white;
  height: 2000px;
  position: relative;
`

const BgGradiance=styled.div`
  position: absolute;
  top: 6.5rem;
  left: 0;
  right: 0;
  height: calc( 100vh - 6.5rem );
  background: linear-gradient(180deg, rgba(189, 179, 249, 0.72) 0%, rgba(255, 255, 255, 0) 103.8%);
  width: 100%;
  
`
