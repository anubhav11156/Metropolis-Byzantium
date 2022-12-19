import React from 'react'
import styled from 'styled-components'

function Hero() {

  const getStartedHandle = () => {
    console.log('fuck you, puprle border');
  }
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
          <Button>
            <div className="get-started" onClick={getStartedHandle}>
              <div className="text-div">
                <p>Get Started</p>
              </div>
              <div className="arrow-div">
                <img src="/images/right-arrow.png"/>
              </div>
            </div>
          </Button>
          <SliderContainer>
            <Trail>
              Here the nfts will move
            </Trail>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`
const UpperContainer = styled.div`

  width: 70%;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .div-1 {
    height: 320px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;

    p {
      margin: 0;
      margin-top: 30px;
      font-size: 70px;
      font-weight: 700;
    }
  }

  .div-2 {
    height:150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;

    .text {
      margin-top: 20px;
      width: 700px;
      height: 100%;
      text-align: center;
  }
`

const Button=styled.div`
  height: 300px;
  width: 70%;
  display: flex;
  justify-content: center;

  .get-started {
    margin-top: 40px;
    height: 43px;
    width: 140px;
    color: white;
    border: none;
    background-color: black;
    border-radius: 30px;
    overflow: hidden;
    transition: background-color 0.2s, opacity 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #8247e5;
    }

    &:active {
      opacity: 0.9;
    }

    p {
      font-size: 14px;
    }

    .text-div {
      width: 100px;

      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .arrow-div {
      width: 20px
      height: 20px;
      width: 20px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-left: -3px;
        width: 75%;
      }
    }
  }


`
const SliderContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: start;
`

const Trail = styled.div`
  margin-top: 50px;
  height: 160px;
  width: 100%;
  background-color: white;
  border-top: 1px solid rgba(130, 71, 230, 0.4);
  border-bottom: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);
`
