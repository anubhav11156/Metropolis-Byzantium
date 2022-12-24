import { React, useState } from 'react'
import styled from 'styled-components'
// import { ConnectKitButton } from "connectkit";
// import { useAccount } from 'wagmi';

function Header() {

  // const [Connected, setConnected] = useState(false);
  // const { address } = useAccount();

  const loginHandler = () => {
    console.log('You clicked login button.');
  }
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
                    <img src="/images/right-arrow-black.png"/>
                  </div>
              </div>
              <div className="loan" onClick={loanHadle}>
                <p>Loan</p>
                <div className="logo-container">
                  <img src="/images/right-arrow-black.png"/>
                </div>
              </div>
              <div className="insusrance">
                <p>P2P Insusrance</p>
                <div className="logo-container">
                  <img src="/images/right-arrow-black.png"/>
                </div>
              </div>
            </Menu>
            <LoginSection>

              <div className='login' onClick={loginHandler}>
                Login
              </div>
              {/* {  Connected &&
                <div className="address-div">
                  <p>
                    {address}
                  </p>
                </div>
              }

              <ConnectKitButton.Custom>
              {
                ({ isConnected, show, ensName }) => {

                  if(isConnected){
                    setConnected(true);
                  }else{
                    setConnected(false);
                  }

                  return (
                    <div className="login" onClick={show}>
                      {isConnected ? ensName ?? "Logout" : "Login"}
                      <div className="bar"></div>
                    </div>
                  );
                }
              }
            </ConnectKitButton.Custom> */}
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

const InsideContatiner=styled.div`
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

const Menu=styled.div`
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

const LoginSection=styled.div`

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
