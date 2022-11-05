import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'


function Home() {
    return (
        <Container>
          <Hero />
        </Container>
    )
}

export default Home

const Container=styled.div`
  background-color: lightblue;
  height: 100vh;
`
