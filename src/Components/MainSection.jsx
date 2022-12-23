import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSection() {

  // window.onscroll = function (e) {
  //   // setPixelScrolled(window.scrollY);
  //   console.log(window.scrollY);
  // }

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
                    <img src="/public/images/bz-1.png"/>
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
                    <img src="/public/images/bz-2.png"/>
                  </div>
                </Slide1>
              </Wrapper>
            </SliderContainer>
            </div>
          </Metropolis>
          <Loan>
          </Loan>
        </Container>
    )
}

export default MainSection

const Container=styled.div`
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

const Metropolis=styled.div`
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

const SliderContainer=styled(Slider)`
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
const Wrapper=styled.div`
  flex:1;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

`
const Slide1=styled.div`
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

const Loan=styled.div`
  margin-top: 0.6rem;
  width: 70%;
  flex:1;
  border-radius: 20px;
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);

`
