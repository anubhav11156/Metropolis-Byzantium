import { React, useState } from 'react'
import styled from 'styled-components'
import { ConnectKitButton } from "connectkit";
import { useAccount } from 'wagmi';

function Header() {

  const [Connected, setConnected] = useState(false);
  const { address } = useAccount();

    return (
        <Container>
          <InsideContatiner>
            <div className="name">
              <p>Byzantium</p>
            </div>
            <Menu>
              <div className="loan">Loan</div>
              {/*<div className="insusrance">P2P Insusrance</div> */}
              <div className="metropolis">Metropolis</div>
            </Menu>
            <LoginSection>

              {  Connected &&
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
            </ConnectKitButton.Custom>
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
  border-bottom: 1px solid rgba(255, 255, 255);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 8%);
  background-color: white;
  z-index: 1000;
`

const InsideContatiner=styled.div`
  height: 100%;
  width: 70%;

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
  padding-left: 120px;

  div {
    margin-right: 50px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
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
    background-color: rgba(152, 152, 152, 0.07);
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
    border: 1px solid black;
    width: 95px;
    height: 40px;
    border-radius: 100px;
    color: white;
    background-color: black;
    cursor: pointer;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.8;
    }
  }
`
