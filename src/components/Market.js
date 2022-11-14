import React from 'react'
import styled from 'styled-components'
import StoreNFTCard from './StoreNFTCard'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import {testing} from './Testing'

function Market() {

  // console.log("card is ",testing);
  const cards = testing.map( card => {
    return (
      <StoreNFTCard
        id={card.id}
        bg={card.bg}
      />
    )
  })

    return (
        <Container>
          <BackgroundImage>
            <div className="left">
              <img src="/images/grad-left.png"/>
            </div>
            <div className="right">
              <img src="/images/grad-right.svg"/>
            </div>
          </BackgroundImage>
          <StoreSection>
            <Element name="market" className="heading">
              <p>
                Explore, Buy NFTs
              </p>
            </Element>
            <div className="marketplace">
              {cards}
            </div>
          </StoreSection>

        </Container >
    )
}

export default Market

const Container=styled.div`
  height: auto;
  min-height: 1544px;
  width: 100%;
  position: relative;
`
const BackgroundImage=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  display: flex;

  .left {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
  }

  .right {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StoreSection=styled.div`
  height: auto;
  min-height: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;


  .heading {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 183px;

    p {
      margin-top: 90px;
      font-size: 48px;
      font-weight: 600;
      color: #0D004D;
    }
  }

  .marketplace {
    flex: 1;
    margin-right: 15rem;
    margin-left: 15rem;
    padding-top: 25px;
    padding-bottom: 95px;
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-column-gap: 50px;
    grid-row-gap: 38px;
  }

`
