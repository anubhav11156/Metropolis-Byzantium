import React from 'react'
import styled from 'styled-components'

function Hero() {
    return (
        <Container>

          <UpperContainer>
            <div className="div-1">
              <p>Make use of your NFT</p>
            </div>
            <div className="div-2">
              <p className="text">sdlhkgajg;jlrjfsj;;nvlsdnkvfknjdkfljow5840358kjbgklshkfshdfahf; fslhfadsljfldsf salfsa fsjflsajflshfkshf sfhsaf askfhskfh</p>
            </div>
          </UpperContainer>
          <SliderContainer>
            here will be the NFT slider
          </SliderContainer>
        </Container>
    )
}

export default Hero

const Container=styled.div`
  position: absolute;
  top: 6.5rem;
  left: 0;
  right: 0;
  height: calc(100vh - 6.5rem);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`
const UpperContainer = styled.div`

  width: 70%;
  flex:2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .div-1 {
    background-color: lightpink;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;

    p {
      margin: 0;
      margin-top: 30px;
      font-size: 70px;
      font-weight: 600;
    }
  }

  .div-2 {
    height: 150px;
    width: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: start;

    .text {
      background-color: red;
      width: 700px;
      height: 100%;
      margin: 0;
      text-align: center;
  }

  .div-3 {
    flex: 1;
    color: red;
  }
`
const SliderContainer = styled.div`
  flex: 1;
  width: 100%;

`
