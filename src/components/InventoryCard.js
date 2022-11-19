import { useState, useEffect, React } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../config";

function InventoryCard(props) {

  const [maticRate, setMaticRate] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isBuyClicked, setIsBuyClicked] = useState(false);
  const [isPositive,setIsPositive] = useState(true);

  const price = props.price;
  const tokenId = props.id;

  const onMouseOverHandle = () => {
    setIsHovering(true);
  }

  const onMouseOutHandle = () => {
    if(isBuyClicked) {
      setIsHovering(true);
    }else {
      setIsHovering(false);
    }
  }

const decimalPlaces = 18;

  const resellHandle = async () => {
    setIsBuyClicked(true);
    const newPrice = window.prompt("Enter new price");

     const modal = new web3modal({
         network: "mumbai",
         cacheProvider: true,
     });
     const connection = await modal.connect();
     const provider = new ethers.providers.Web3Provider(connection);
     const signer = provider.getSigner();
     const contract = new ethers.Contract(
         contractAddress,
         contractAbi.abi,
         signer
     );

     const nftPrice = ethers.utils.parseUnits(price.toString(), "ether");
     console.log(nftPrice);
     const transaction = await contract.resellNFTs(tokenId, {
         value: newPrice,
         gasLimit: 1000000,
     });
     await transaction.wait()
     .then( () => {
       toast.success("Transaction successful.", {
       position: toast.POSITION.TOP_CENTER
       });
       setIsBuyClicked(false);
     }).catch( () => {
       toast.error("Transaction failed.", {
         position: toast.POSITION.TOP_CENTER
       });
        setIsBuyClicked(false);
     })
  }

  const getMaticMarketRate = async() => {
    const rate = await fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD,JPY,EUR&api_key={a0d31efdacea6a7974dada2b791a9a08e6b76a625c68d74328a6b6d5e6690918}')
    .then(response => response.json())
    .then(result => setMaticRate((result.USD))?.toFixed(2))
  }

  useEffect(()=> {
    getMaticMarketRate();
  },[]);
  // a0d31efdacea6a7974dada2b791a9a08e6b76a625c68d74328a6b6d5e6690918  crypto-compare api key

  /*-------Calculating the percentage change--------*/
  let currentUsdValue = (maticRate*price).toFixed(3);
  let orignalUsdValue = (props.usdValue);

  let pctChange = (((currentUsdValue - orignalUsdValue)/orignalUsdValue)*100).toFixed(2);

  useEffect(()=> {
    if(pctChange){
      setIsPositive(false);
    }
  })

  /*------------------------------------------------*/

    return (
        <Container onMouseOver={onMouseOverHandle} onMouseOut={onMouseOutHandle}>
          <Card>
            <div className="background-image">
                <img src=""/>
            </div>
            <div className="image-div">
              <img src={props.image}/>
              {
                isHovering && (
                  <Fade bottom duration={350}>
                    <div className="buy-div" onClick={resellHandle}>
                      {
                        isBuyClicked ? <ClipLoader
                        color="rgba(255, 255, 255, 0.93)"
                        size={14}
                        /> : <p>Resell</p>
                      }
                    </div>
                  </Fade>
                )
              }
            </div>
              <div className="detail-div">
                <div className="detail-div-wrapper">
                  <div className="id-div">
                    {`# ${props.id}`}
                  </div>
                  <div className="price-div">
                    <div className="logo-div">
                      <img src="/images/polygon-purple.png"/>
                    </div>
                    <div className="crypto-price">
                      {price}
                    </div>
                    <div className="market-price">
                      {`$${currentUsdValue}`}
                    </div>
                    <div className="status">
                      {
                        isPositive &&
                        <div className="pst">
                          <div className="logo-container">
                            <img src="/images/up.png"/>
                          </div>
                          <div className="decimal">
                            <p>{pctChange} %</p>
                          </div>
                        </div>
                      }
                      {
                        !isPositive &&
                        <div className="ngt">
                          <div className="logo-container">
                            <img src="/images/down.png"/>
                          </div>
                          <div className="decimal">
                            <p>{pctChange} %</p>
                          </div>
                        </div>
                      }

                    </div>
                  </div>
                  <div className="name-div">
                    <p>{props.name}</p>
                  </div>
                </div>
                <div className="icon-div">
                  <div>
                    <img src="/images/pattern1.png"/>
                  </div>
                </div>
              </div>
          </Card>
        </Container>
    )
}

export default InventoryCard

const Container=styled.div`
  height: 410px;
  width: 315px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  box-shadow: 6px 6px 10px rgba(186, 186, 186, 0.77);
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.53);
  border-style: solid;
  box-sizing: border-box;
  transition: box-shadow 0.2s;
  &:hover {
      box-shadow: 10px 8px 12px rgba(186, 186, 186, 0.77);
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(140.54deg, #608D00 0%, #D30000 72.37%), linear-gradient(58.72deg, #0029FF 0%, #8FFF00 100%), radial-gradient(100% 164.72% at 100% 100%, #6100FF 0%, #00FF57 100%), radial-gradient(100% 148.07% at 0% 0%, #FFF500 0%, #51D500 100%);
    background-blend-mode: color-dodge, overlay, difference, normal;
    opacity: 0.2;
    z-index: -1;
  }
`

const Card=styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
  opacity: 1;

  .image-div {
    margin-top: 8px;
    width: 295px;
    height: 295px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;transform
    border: 2px solid rgba(255, 255, 255, 0.4);
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .buy-div {
      width: 85px;
      height: 35px;
      position: absolute;
      bottom: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-image: linear-gradient( 109.6deg,  rgba(128,144,233,0.85) 17.4%, rgba(171,88,238,0.85) 52.4%, rgba(255,129,246,0.85) 91% );
      box-shadow: 2px 4px 15px 0 rgba( 31, 38, 135, 0.37 );
      border-radius: 1px;
      border: 1px solid rgba( 255, 255, 255, 0.8 );
      color: rgba(255, 255, 255, 0.89);

      transition: box-shadow 0.25s;

      &:hover {
        box-shadow: 2px 8px 22px 0 rgba( 31, 38, 135, 0.37 );
      }

      &:active {
        background-image: linear-gradient( 109.6deg,  rgba(128,144,233,0.77) 17.4%, rgba(171,88,238,0.77) 52.4%, rgba(255,129,246,0.77) 91% );
      }
    }
  }

  .detail-div {
    flex: 1;
    width: 295px;
    margin-bottom: 8px;
    margin-top: 8px;
    display: flex;

    .detail-div-wrapper {
      width: 240px;
      display: flex;
      flex-direction: column;

      .id-div {
        width: 100%;
        width: 240px;
        height: 20px;
        display: flex;
        align-items: center;
        color: rgba(59, 127, 242, 0.82);
        font-size: 16px;
        opacity: 0.8;

      }

      .price-div {
        width: 240px;
        max-height: 25px;
        margin-top: 5px;

        display: flex;

        .logo-div{
          width: 20px;

          display: flex;
          align-items: center;
          overflow: hidden;

          img {
            margin-top: 3px;
            width: 17.8px;
            height: 17.8px;
          }

        }

        .crypto-price {
          flex:0.9;
          height: 24px;
          width: 50px;
          margin-top: 1px;
          margin-left: 7px;
          font-size: 18px;
          font-weight: 500;
          display:flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.73);
        }

        .market-price {
          width: 70px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 15.5px;
          display:flex;
          align-items: center;
          margin-top: 2px;
        }

        .status {
          flex: 1;
          .pst,
          .ngt {
            height: 100%;
            width: 100%;

            display: flex;

            .logo-container {
              height: 100%;
              width: 20px;

              display: flex;
              justify-content: center;
              align-items: center;

              img {
                transform: rotate(180deg);
                width: 70%;
              }
            }

            .decimal {
              flex:1;
              display: flex;
              align-items: center;
              justify-content: center;
              p {
                margin: 0;
                margin-top: 1px;
                font-size: 14px;
                color: rgb(218, 0,0);
              }
            }

          }

          .pst {
            height: 100%;
            width: 100%;

            display: flex;

            .logo-container {
              height: 100%;
              width: 20px;

              display: flex;
              justify-content: center;
              align-items: center;

              img {
                transform: rotate(0deg);
                width: 70%;
              }
            }

            .decimal {
              flex:1;
              display: flex;
              align-items: center;
              justify-content: center;
              p {
                margin: 0;
                margin-top: 1px;
                font-size: 14px;
                color: rgb(1,213,39);
              }
            }
          }
        }
      }

      .name-div {
        width: 240px;

        flex:1;
        display: flex;
        align-items: end;
        p {
          margin: 0;
          margin-bottom: -6px;
          font-family: Poppins;
          font-size: 25px;
          font-weight: 600;
          background: -webkit-radial-gradient(rgba(67, 69, 82, 1), rgba(24, 24, 26, 0.72));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent
        }
      }
    }

    .icon-div {
      flex: 1;

      display: flex;
      justify-content: end;
      align-items: end;

      div {
        height: 35px;
        width: 35px;
        opacity: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }
    }
  }

`
