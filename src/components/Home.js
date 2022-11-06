import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'


function Home() {
    return (
        <Container>
          <Hero />
        { /* <div className="frame-div">
            <iframe className="iframe-1" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fs8bhmu6wA3wQiPbmXhn5YK%2FFor-Metropolis%3Fnode-id%3D0%253A1"></iframe>
          </div> */}
        </Container>
    )
}

export default Home

const Container=styled.div`
  height: 100vh;

  .spacer {
    aspect-ratio: 960/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }

  .frame-div {

    .iframe-1 {
      border: 1px solid rgba(0, 0, 0, 0.1);
      width:800px;
      height:450px;
    }

  }

`
