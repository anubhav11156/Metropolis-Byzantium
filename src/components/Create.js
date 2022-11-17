import React from 'react'
import styled from 'styled-components';

function Create() {
    return (
        <Container>
          <Background></Background>
          <Heading>
            <div className="heading-div">
              <p>Create new NFT</p>
            </div>
            <div className="logo-div">
              <img src="/images/pattern1.png"/>
            </div>
          </Heading>
          <MainForm>
            <Name>
              <div className="name-div">
                <p>Name</p>
              </div>
              <div className="name-input">
                <input name="name" placeholder="Name of the product" required/>
              </div>
            </Name>
            <PriceRoyalty>
              <div className="left-div">
                <div className="price-div">
                  <p>Price</p>
                </div>
                <div className="price-container">
                  <div className="logo-div">
                    <img src="/images/polygon-purple.png"/>
                  </div>
                  <div className="price-input">
                    <input name="price" placeholder="2 MATIC" required/>
                  </div>
                </div>
              </div>
              <div className="right-div">
                <div className="royalty-div">
                  <p>Royalty</p>
                </div>
                <div className="royalty-container">
                  <div className="pct-div">
                    <img src="/images/pct.png"/>
                  </div>
                  <div className="royalty-input">
                    <input name="royalty" placeholder="Maximum 20%" required/>
                  </div>
                </div>
              </div>
            </PriceRoyalty>
            <ChooseFile>

            </ChooseFile>
            <Gap></Gap>
            <Mint>

            </Mint>
          </MainForm>
        </Container>
    )
}

export default Create

const Container=styled.div`
  margin-left: 10px;
  width: 700px;
  height: 790px;
  border-radius: 3px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 4px 10px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 2px solid rgba( 255, 255, 255, 0.18 );
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

`
const Background=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  background-image: linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% );
  opacity: 0.3;
  z-index: -1;
`
const Heading=styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background: rgba( 255, 255, 255, 0.5 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  box-shadow: 0px 5px 15px rgba(184, 184, 184, 0.1);

  .heading-div {
    margin-left: 20px;
    flex: 1;
    p {
      margin: 0;
      font-size: 2rem;
      font-weight: 500;
      color: #0D004D;
      opacity: 0.8;
    }
  }

  .logo-div {
    margin-right: 20px;
    width: 80px;
    height: 48px;
    display: flex;
    justify-content: end;
    align-items: center;
    img {
      width: 37px;
      height: 37px;
      opacity: 0.8;
    }
  }

`

const MainForm=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`

const Name=styled.div`
  margin-top: 20px;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;

  .name-div {
    height: 35px;

    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
      color: #0D004D;
      opacity: 0.8;
    }
  }

  .name-input {
    flex: 1;
    display: flex;

    input {
      margin-top: 2px;
      height: 40px;
      width: 100%;
      border: 2px solid white;
      border-radius: 2px;
      padding-left: 12px;
      background: rgba( 255, 255, 255, 0.6 );
      backdrop-filter: blur( 4px );
      -webkit-backdrop-filter: blur( 4px );
      font-size: 17px;
      color: #0D004D;
      opacity: 0.8;
    }
  }
`

const PriceRoyalty=styled.div`
  margin-top: 10px;
  height: 100px;

  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  gap: 20px;

  .left-div,
  .right-div {
    flex: 1;
    height: 100%;

    display: flex;
    flex-direction: column;

    .price-div {
      width: 100%;
      height: 35px;

      display: flex;
      align-items: center;
      margin-bottom: 2px;

      p {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        color: #0D004D;
        opacity: 0.8;
      }
    }

    .price-container {
      flex: 1;
      display: flex;


      .logo-div {
        width: 40px;
        height: 42px;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba( 255, 255, 255,0.9);

        img {
          width: 28px;
          height: 28px;
          opacity: 0.8;
        }
      }

      .price-input {
        flex: 1;
        height: 100%;

        display: flex;
        align-items: start;

        input {
          height: 40px;
          width: 100%;
          border-right: 2px solid white;
          border-left: 2px solid white;
          border-top: 2px solid white;
          border-bottom: 2px solid white;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          padding-left: 12px;
          background: rgba( 255, 255, 255, 0.6 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          font-size: 17px;
          color: #0D004D;
          opacity: 0.8;
        }

      }
    }
  }

  .right-div {
    .royalty-div {
      width: 100%;
      height: 35px;

      display: flex;
      align-items: center;
      margin-bottom: 2px;

      p {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        color: #0D004D;
        opacity: 0.8;
      }
    }

    .royalty-container {
      flex: 1;
      display: flex;


      .pct-div {
        width: 40px;
        height: 42px;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba( 255, 255, 255,0.9);

        img {
          width: 28px;
          height: 28px;
          opacity: 0.8;
        }
      }

      .royalty-input {
        flex: 1;
        height: 100%;

        display: flex;
        align-items: start;

        input {
          height: 40px;
          width: 100%;
          border-right: 2px solid white;
          border-left: 2px solid white;
          border-top: 2px solid white;
          border-bottom: 2px solid white;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          padding-left: 12px;
          background: rgba( 255, 255, 255, 0.6 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          font-size: 17px;
          color: #0D004D;
          opacity: 0.8;
        }

      }
    }
  }
`

const ChooseFile=styled.div`
  margin-top: 10px;
  flex: 1;
  background-color: red;
  margin-left: 30px;
  margin-right: 30px;
`
const Gap=styled.div`
  height: 150px;

  margin-left: 30px;
  margin-right: 30px;
`
const Mint=styled.div`
  height: 80px;
  background-color:gray;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`
