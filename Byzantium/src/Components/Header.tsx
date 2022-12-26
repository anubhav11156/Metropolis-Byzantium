import { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import uauthModule from '@web3-onboard/uauth';
import uauthBNCModule from '@uauth/web3-onboard'
import UAuth from '@uauth/js'




// console.log('process dotenv : ', process.env)
// import { ConnectKitButton } from "connectkit";
// import { useAccount } from 'wagmi';


function Header() {

  const [userAddress, setUserAddress] = useState('');
  const [connected, setConnected] = useState(false);
  const [label, setLabel] = useState('');

  const unstoppableClientID = import.meta.env.VITE_UNSTOPPABLE_DOMAIN_CLIENT_ID;
  const alchemyId = import.meta.env.VITE_ALCHEMY_API_KEY;

  const goerliUrl = `https://eth-goerli.g.alchemy.com/v2/${alchemyId}/`;

  const injected = injectedModule();

  const uauth = new UAuth({
    clientID: `${unstoppableClientID}`,
    redirectUri: 'http://localhost:5173',
    scope: 'openid wallet email profile:optional social:optional',
  })

  const uauthOptions = {
    uauth: uauth
  }

  const uauthModule = uauthBNCModule(uauthOptions);

  const onboard = Onboard({
    wallets: [
      injected,
      uauthModule
    ],
    chains: [
      {
        id: '0x5',
        token: 'ETH',
        label: 'Goerli Testnet',
        rpcUrl: goerliUrl
      },
    ],
  })

  // login handler
  const loginHandler = async () => {

    const wallets = await onboard.connectWallet()
      .then(response => {
        setUserAddress(response[0].accounts[0].address);
        setLabel(response[0].label);
        if (response[0].accounts[0].address.length != 0) {
          setConnected(true);
        }
      });
  }


  //logout handler
  const logoutHandler = async () => {
    // uauth.logout(); // this is for UNS login not for normal wallets 

    if (label === 'Unstoppable') {
      uauth.logout()
      // uauth.logout()
        .then(() => {
          setUserAddress('');
          setLabel('');
          setConnected(false);
        });
    }

    await onboard.disconnectWallet({ label: label })
    setUserAddress('');
    setLabel('');
    setConnected(false);
  }


  console.log('address length : ', userAddress.length);


  const metropolisHandle = () => {
    window.scroll({
      top: 636,
      behavior: 'smooth'
    });
  }

  const loanHadle = () => {
    window.scroll({
      top: 1085,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <InsideContatiner>
        <div className="name">
          <p>Byzantium</p>
        </div>
        <Menu>
          <div className="metropolis" onClick={metropolisHandle}>
            {/* <a href="https://metropolis-694d1.web.app/" target="_blank">Metropolis</a> */}
            <p>Metropolis</p>
            <div className="logo-container">
              <img src="/images/right-arrow-black.png" />
            </div>
          </div>
          <div className="loan" onClick={loanHadle}>
            <p>Loan</p>
            <div className="logo-container">
              <img src="/images/right-arrow-black.png" />
            </div>
          </div>
          <div className="insusrance">
            <p>P2P Insusrance</p>
            <div className="logo-container">
              <img src="/images/right-arrow-black.png" />
            </div>
          </div>
        </Menu>
        <LoginSection>

          {!connected &&
            <>
              <div className='login' onClick={loginHandler}>Login</div>
            </>

          }

          {connected &&
            <>
              <div className="address-div">
                <p>
                  {userAddress}
                </p>
              </div>
              <div className='login' onClick={logoutHandler}>Logout</div>
            </>
          }
        </LoginSection>
      </InsideContatiner>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 8%);
  background-color: white;
  z-index: 1000;
`

const InsideContatiner = styled.div`
  height: 100%;
  width: 70%;
  min-width: 1333.5px;

  display: flex;
  justify-content: center;
  align-items: center;


  .name {
    flex:0.2;
    height: 100%;


    display: flex;
    justify-content: start;
    align-items: center;

    p {
      font-size: 2rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.87);
    }
  }
`

const Menu = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 250px;


  div {

    margin-right: 30px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.15s;



    display: flex;
    align-items: center;

    &:hover {
      color: #8247e5;
    }

    a {
      color: black;
      text-underline-offset: 3px;
      &:hover {
        &:hover {
          color: #8247e5;
        }
      }
    }

    .logo-container {
      width: 12px;
      height: 14px;
      margin-left: 5px;

      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        margin-top: 2.5px;
        width: 95%;
        opacity: 0.8;
      }
    }

  }
`

const LoginSection = styled.div`

  width: 300px;
  display: flex;
  height: 100%;
  justify-content: end;
  align-items: center;

  .address-div {
    flex: 1;
    background-color: rgba(130, 71, 230, 0.2);
    margin-left: 5px;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 29px;

    p {
        width: 140px;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 40px;
    border-radius: 100px;
    color: white;
    background-color: black;
    cursor: pointer;
    transition: background-color 0.2s, opacity 0.2s;

    &:hover {
      background-color: #8247e5;
    }

    &:active {
      opacity: 0.9;
    }
  }
`
