import { useState, useEffect, React } from 'react'
import styled from 'styled-components'
import { ConnectKitButton } from "connectkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

    const [flag, setFlag] = useState(0);
    const [Connected, setConnected]= useState(false);

    useEffect( () => {
      if(Connected && flag==0){
        toast.success("Logged In", {
          position: toast.POSITION.TOP_CENTER
        });
        setFlag(1);
      }else if(!Connected && flag==1 ){
        toast.success("Logged Out", {
          position: toast.POSITION.TOP_CENTER
        });
        setFlag(0);
      }
    });

    return (
        <Container>
          <LeftSection>
            <div>
              <p>Metropolis</p>
            </div>
          </LeftSection>
          <MiddleSection>
            <div className="dashboard-div">
              <p>
                Dashboard
              </p>
            </div>
          </MiddleSection>
          <RightSection>
            <ConnectKitButton.Custom>
              {
                ({ isConnected, show, ensName }) => {
                  // console.log(isConnected);
                  if(isConnected){
                    setConnected(true);
                  }else{
                    setConnected(false);
                  }

                  return (
                    <div  className="login" onClick={show}>
                      {isConnected ? ensName ?? "Logout" : "Login"}
                      <div className="bar"></div>
                    </div>
                  );
                }
              }
            </ConnectKitButton.Custom>
          </RightSection>
          <ToastContainer
            autoClose={1000}
            hideProgressBar={true}
          />
        </Container>
    )
}

export default Header

const Container=styled.div`
  position: fixed;
  width: 100%;
  height: 4.5rem;
  z-index: 10;
  display: flex;
  background-color: rgba(255, 255, 255, 0.23);
  box-shadow: 0px 1px 10px rgba(70, 67, 67, 0.05);
`

const LeftSection=styled.div`
  width: 150px;
  margin-left: 16rem;
  display: flex;
  align-items: center;
  color: #0D004D;
  div {
    p {
      font-size: 25px;
      font-weight: 700;
    }
  }

`

const MiddleSection=styled.div`
  width: 1063px;
  display: flex;
  justify-content: end;
  align-items: center;

  .dashboard-div {
    width: 100px;
    height: 1.rem;
    margin-right: 28px;
    display: flex;
    justify-content: end;
    align-items: center;
    p{
      font-size: 16.5px;
    }
  }
`

const RightSection=styled.div`
  width: 120px;
  margin-right: 16rem;
  display: flex;
  align-items: center;
  justify-content: end;

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100px;
    height: 2.4rem;
    cursor: pointer;
    position: relative;
    font-size: 17px;
    font-weight: 500;
  }

  .login .bar {
    background: linear-gradient(180deg, #FFB7B7 0%, #727272 100%), radial-gradient(60.91% 100% at 50% 0%, #FFD1D1 0%, #260000 100%), linear-gradient(238.72deg, #FFDDDD 0%, #720066 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);
    background-blend-mode: screen, overlay, hard-light, color-burn, color-dodge, normal;
    width: 100%;
    height: 100%;
    z-index: -10;
    position: absolute;
    opacity: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  }

  .login:hover .bar {
    opacity: 1;
   transform: scaleX(1);
  }
`
