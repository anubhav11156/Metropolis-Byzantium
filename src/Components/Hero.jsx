import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

config({ ssrFadeout: true });

function Hero() {

const [scrollValue, setScrollValue] = useState(0);
const [isScrolled, setIsScrolled] = useState(false);

  let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 12,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: false
  }


  window.onscroll = function (e) {
    // setPixelScrolled(window.scrollY);
    setScrollValue(window.scrollY);
    if(scrollValue>=636){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }

  }



  const getStartedHandle = () => {
    window.scroll({
      top: 636,
      behavior: 'smooth'
    });
  }

    return (
        <Container>
          <UpperContainer>
            <div className="div-1">
              <p>Make use of your NFT</p>
            </div>
            <div className="div-2">
              <p className="text">Monetize your NFT with Byzantium Protocol. Trasform NFTs into loan instantly. Borrow private loan using <span className="span-class"><a href="https://polygon.technology/solutions/polygon-nightfall" target="_blank">Polygon NightFall</a></span> Optimistic-Zero Knowledge technology.</p>
            </div>
          </UpperContainer>
          <Button>
            <Fade bottom>
              <div className="get-started" onClick={getStartedHandle}>
                <div className="text-div">
                  <p>Get Started</p>
                </div>
                <div className="arrow-div">
                  <img src="/images/right-arrow.png"/>
                </div>
              </div>
            </Fade>

          </Button>
            <SliderContainer>
              <Trail {...settings} style={{
                  position: isScrolled ? 'fixed' : 'static',
                  top: isScrolled ? '4.26rem' : ''
                }}>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/1.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/2.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/3.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/4.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/5.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/11.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/7.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/8.gif"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/6.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/15.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/10.webp"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/9.png"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/12.jpg"/>
                    </div>
                  </div>
                </div>
                <div className="nft-container">
                  <div className="wrapper">
                    <div className="img-div">
                      <img src="images/13.jpg"/>
                    </div>
                  </div>
                </div>
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
      font-size: 72px;
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
      margin-top: 30px;
      width: 700px;
      height: 100%;
      text-align: center;
      color: rgba(0, 0, 0, 0.94);
      font-size: 16px;
      .span-class {
        a {
          color: #8247e5;
          cursor: pointer;
        }
      }
  }
`

const Button=styled.div`

  height: 300px;
  width: 70%;
  display: flex;
  justify-content: center;

  .get-started {
    margin-top: 50px;
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

const Trail = styled(Slider)`
  z-index: 30;
  margin-top: 50px;
  height: 160px;
  width: 100%;
  background-color: white;
  border-top: 1px solid rgba(130, 71, 230, 0.4);
  border-bottom: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;

  .nft-container {
    height: 140px;


    .wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .img-div {
        display: flex;
        background-color: rgba(130, 71, 230, 0.4);
        justify-content: center;
        align-items: center;
        width: 100px;
        border-radius: 10px;
        border: 1px solid rgba(130, 71, 230, 0.1);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.08);
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }
`
