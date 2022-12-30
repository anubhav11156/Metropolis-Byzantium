import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loan from './Loan';


function MainSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Metropolis>
        <div className="left-div">
          <div className="heading">
            <p>Explore Byzantium's NFT marketplace, Metropolis</p>
          </div>
          <div className="button-div">
            <a href="https://metropolis-694d1.web.app/" target="_blank">
              <div className="visit-metropolis">
                <p>Visit Metropolis</p>
                <div className="logo-div">
                  <img src="/images/long-white.png" />
                </div>
              </div>
            </a>

          </div>
        </div>
        <div className="right-div">
          <SliderContainer {...settings}>
            <Wrapper>
              <Slide1>
                <div className="tittle">
                  <div className="red"></div>
                  <div className="orange"></div>
                  <div className="green"></div>
                </div>
                <div className="image-container">
                  <img src="/images/metro-1.png" />
                </div>
              </Slide1>
            </Wrapper>
            <Wrapper>
              <Slide1>
                <div className="tittle">
                  <div className="red"></div>
                  <div className="orange"></div>
                  <div className="green"></div>
                </div>
                <div className="image-container">
                  <img src="/images/metro-2.png" />
                </div>
              </Slide1>
            </Wrapper>
            <Wrapper>
              <Slide1>
                <div className="tittle">
                  <div className="red"></div>
                  <div className="orange"></div>
                  <div className="green"></div>
                </div>
                <div className="image-container">
                  <img src="/images/metro-3.png" />
                </div>
              </Slide1>
            </Wrapper>
          </SliderContainer>
        </div>
      </Metropolis>
      <Loan />
      {/* <Loan>
        
      </Loan> */}
    </Container>
  )
}

export default MainSection

const Container = styled.div`
  margin-top: 3.1rem;
  position: absolute;
  top: calc(102vh - 6.5rem);
  left: 0;
  right: 0;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const Metropolis = styled.div`
  margin-top: -1.4rem;
  width: 70%;
  height: 400px;
  border-radius: 20px;

  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-sizing: border-box;
  

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .left-div {
    flex:1;
    height: 100%;
    display: flex;
    flex-direction: column;
    

    .heading {
      flex:1;

      display: flex;
      justify-content: start;
      margin-top: 50px;
      margin-left: 50px;


      p {
        width: 490px;
        margin: 0;
        font-size: 42px;
        font-weight: 600;
        color: rgb(107, 35, 227);
      }
    }



    .button-div {

      a {
        text-decoration: none;
      }

      flex:1;
      margin-left: 50px;
      margin-top: 5px;

      .visit-metropolis {
        margin-top: 35px;
        width: 220px;
        height: 45px;
        border-radius: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgb(107, 35, 227);
        cursor: pointer;
        transition: opacity 0.15s;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.39);

        &:hover {
          opacity: 0.92;
        }

        &:active {
          opacity: 0.9;
        }
        p {
          margin-left: 12px;
          margin-right: 2px;
          font-weight: 500;
          color: white;
        }

        .logo-div {
          width: 51px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            margin-top: 2px;
            width: 100%;
          }
        }
      }

    }
  }

  .right-div {
    flex:1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgb(130, 71, 229);
  }
`

const SliderContainer = styled(Slider)`
  width: 480px;
  height: 250px;


  display: flex;
  justify-content: center;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(224, 224, 224);
    }
  }

  li.slick-active button:before {
    color: white;
  }





`
const Wrapper = styled.div`
  flex:1;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

`
const Slide1 = styled.div`
  margin-left: 45px;
  margin-top: 10px;
  width: 392px;
  height: 225px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  transition: transform 0.25s;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  box-shadow: 2px 6px 11px rgba(54, 56, 56, 0.56);
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }

  .tittle {
    padding-top: 5px;
    padding-bottom: 3px;
    height: 15px;
    border-bottom: 1px solid rgba(65, 62, 62, 0.88);
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    background: rgba(65, 62, 62, 0.88);

    .red {
      margin-top: 0px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color:  rgb(255,69,53);
    }

    .orange {
      margin-top: 0px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color:  rgb(255,159,10);
      margin-left: 5px;
    }
    .green {
      margin-top: 0px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color:  rgb(48,209,88);
      margin-left: 5px;
    }
  }

  .image-container {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      object-fit: fill;
    }
  }
`

