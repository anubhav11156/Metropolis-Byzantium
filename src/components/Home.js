import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Market from './Market'


function Home() {
    return (
        <Container>
          <Hero />
          <Market />
        </Container>
    )
}

export default Home

const Container=styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`
