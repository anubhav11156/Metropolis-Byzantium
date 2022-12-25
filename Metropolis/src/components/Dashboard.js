import {useState, useEffect, React} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';
import { ConnectKitButton } from "connectkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectAccount } from '../features/AccountDetailSlice';
import Create from './Create';
import Listing from './Listing';
import Inventory from './Inventory';


function Dashboard() {

  const navigate = useNavigate();
  const [Connected, setConnected] = useState(true);

  const getAccountDetail = useSelector(selectAccount);


  useEffect( ()=> {
    if(!Connected){
      navigate('/');
    }
  })
  const avatar = createAvatar( style, {
    dataUri: true,
    seed: `metro-${getAccountDetail.address}`
  });

  const [isCreateClicked, setIsCreateClicked] = useState(true);
  const [isListingClicked, setIsListingClicked] = useState(false);
  const [isInventoryClicked, setIsInventoryClicked] = useState(false);

  const createHandle = () => {
    setIsCreateClicked(true);
    setIsListingClicked(false);
    setIsInventoryClicked(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  const listingHandle = () => {
    setIsListingClicked(true);
    setIsCreateClicked(false);
    setIsInventoryClicked(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  const inventoryHandle = () => {
    setIsInventoryClicked(true);
    setIsCreateClicked(false);
    setIsListingClicked(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
    return (
        <Container>
          <Upper></Upper>
          <BackgroundImage>
            <div className="right">
              <img src="/images/bg-grad.jpg"/>
            </div>
          </BackgroundImage>
          <SideBar>

            <div className="bg"></div>

            <div className="metropolis">
              <p onClick={() => navigate('/')}>Metropolis</p>
            </div>

            <div className="avatar">
              <div className="avatar-container">
                <div className="image-div">
                  <img src={avatar}/>
                  {/*<div className="tip">

                  </div> */}
                </div>
                <div className="account-deatail">
                  <div className="address">
                    <p>{getAccountDetail.address}</p>
                  </div>
                  <div className="balance">
                    <div className="logo-div">
                      <img src="/images/polygon-purple.png"/>
                    </div>
                    <div className="amount">
                      <p>{getAccountDetail.balance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <div className="create-button" onClick={createHandle}
                style={{
                  color: isCreateClicked ? 'rgba(255, 255, 255, 0.7)' : 'rgba(13, 0, 77, 0.65)'
                }}
              >
                <div className="buttons-logo">
                  <img src="/images/create.png"/>
                </div>
                <div className="text">
                  <p>Create</p>
                </div>
              </div>
              <div className="listing-button" onClick={listingHandle}
                style={{
                  color: isListingClicked ? 'rgb(255, 255, 255,0.7)' : 'rgba(13, 0, 77, 0.65)'
                }}
              >
                <div className="buttons-logo">
                  <img src="/images/listing.png"/>
                </div>
                <div className="text">
                  <p>Listing</p>
                </div>
              </div>
              <div className="inventory-button" onClick={inventoryHandle}
                style={{
                  color: isInventoryClicked ? 'rgb(255, 255, 255,0.7)' : 'rgba(13, 0, 77, 0.65)'
                }}
              >
                <div className="buttons-logo">
                  <img src="/images/inventory.png"/>
                </div>
                <div className="text">
                  <p>Inventory</p>
                </div>
              </div>
            </div>
            <div className="logout-div">
              <ConnectKitButton.Custom>
                {
                  ({ isConnected, show, ensName }) => {
                    // console.log("testing",isConnected);
                    if(isConnected){
                      setConnected(true);
                    }else{
                      setConnected(false);
                    }

                    return (
                      <div className="logout-box" onClick={show}>
                        <div className="logout-logo-div">
                          <img src="/images/logout.png"/>
                        </div>
                        {isConnected && "Logout" }
                      </div>
                    );
                  }
                }
              </ConnectKitButton.Custom>
            </div>
          </SideBar>
          <MainSection>
            { isCreateClicked &&
              <Create />
            }
            {
              isListingClicked &&
              <Listing />
            }
            {
              isInventoryClicked &&
              <Inventory />
            }
          </MainSection>
          <ToastContainer
            autoClose={1000}
            hideProgressBar={true}
          />
        </Container>
    )
}

export default Dashboard

const Container=styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
`

const Upper=styled.div`
  height: 7.3rem;
  position: fixed;
  width: 100%;
  background-image: linear-gradient( 105.5deg,  rgba(31,212,248,1) 11%, rgba(218,15,183,1) 74.9% );
  z-index: 8;
  box-shadow: 0px 10px 32px rgb(107, 111, 212,0.3);
`

const SideBar=styled.div`
  position: fixed;
  left: 20px;
  top: 38px;
  height: 913px;
  background-color: lightpink;
  width: 280px;
  display: flex;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5.2px );
  -webkit-backdrop-filter: blur( 5.2px );
  border-radius: 2px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  box-sizing: border-box;
  z-index: 10;

  .metropolis {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 22px;
      font-weight: 600;
      color: rgba(13, 0, 77, 0.67);
      transition: color 0.15s;

      &:hover {
        color: rgba(13, 0, 77, 0.55);
      }
    }
  }

  .avatar {
    height: 345px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2.5px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 15px;

    .avatar-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      height: 240px;
      width: 190px;
      border-radius: 2px;

      .image-div {
        width: 90%;
        height: 160px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-radius: 1px;
        overflow: hidden;
        background: rgba( 255, 255, 255, 0.5 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );

        img {
          margin-top: 14px;
          width: 85%;
          overflow: hidden;

        }

        position: relative;

        .tip {
          position: absolute;
          top: -15px;
          left: -2px;
          height: 15px;
          width: 50px;
          background: rgba( 255, 255, 255, 0.5 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          border-left: 2px solid rgba(255, 255, 255, 0.4);
          border-top: 2px solid rgba(255, 255, 255, 0.4);
          border-right: 2px solid rgba(255, 255, 255, 0.4);
          box-sizing: border-box;
        }
      }

      .account-deatail {
        margin-top: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 8px;

        .address {
          border-radius: 1px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          flex:1;
          display:flex;
          justify-content: center;
          align-items: center;

          box-sizing: border-box;

          background: rgba( 255, 255, 255, 0.5 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );

          p {
            margin: 0;
            width: 90%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: rgba(13, 0, 77, 0.67);
          }
        }

        .balance {
          border: 2px solid rgba(255, 255, 255, 0.5);
          flex: 1;
          box-sizing: border-box;
          display: flex;

          .logo-div {
            width: 30px;
            border-right: 2px solid rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 20px;
              opacity: 0.8;
            }
          }

          .amount {
            flex: 1;
            display: flex;
            align-items: center;
            p {
              margin: 0;
              margin-left: 8px;
              font-size: 15px;
              font-weight: 500;
              color: rgba(13, 0, 77, 0.67);
            }
          }
        }
      }
    }
  }

  .buttons {
    height: 440px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-top: 50px;
    align-items: center;


    .create-button,
    .listing-button,
    .inventory-button {

      height: 35px;
      width: 150px;
      display: flex;
      align-items: center;
      overflow: hidden;

      .buttons-logo {
        width: 40px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 26px;
          height: 26px;
          opacity: 0.7;
        }
      }

      .text {
        margin-left: 7px;
        flex: 1;
        display: flex;
        align-items: center;

        p {
          margin: 0;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
  }

  .logout-div {
    height: 65px;
    display: flex;
    align-items: center;
    padding-bottom: 5px;

    .logout-box {
      margin-left: 70px;
      display: flex;
      align-items: center;

      width: 100px;
      height: 30px;
      color: black;
      transition: color 0.15s;

      &:hover {
        color: rgba(0, 0, 0, 0.75);
      }
      .logout-logo-div {
        width: 30px;
        height: 100%;
        overflow: hidden;
        margin-right: 7px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 20px;
          margin-bottom: 2px;
        }
      }
    }
  }


  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    background-image: linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% );
    opacity: 0.3;
    background-image: linear-gradient( 68.2deg,  rgba(255,202,88,1) 0%, rgba(139,73,255,1) 100.2% );
  }

`

const BackgroundImage=styled.div`
  position: fixed;
  height: 120vh;

  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: flex;

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    opacity: 0.5;
    img {
      width: 100%;
    }
  }
`

const MainSection=styled.div`
  position: absolute;
  top: 7.3rem;
  left: 18.75rem;
  bottom: 0;
  right: 0;
  padding-top: 40px;
  padding-left: 50px;
  display: flex;
`
