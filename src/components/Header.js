import { useState, useEffect, React } from 'react'
import styled from 'styled-components'
import { ConnectKitButton } from "connectkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { Network, Alchemy } from "alchemy-sdk";
import { useDispatch, useSelector } from 'react-redux';
import { accountAdded, selectAccount } from '../features/AccountDetailSlice';

function Header() {

  const dispatch = useDispatch();
  const getAccountDetail = useSelector(selectAccount);

  const navigate = useNavigate();
  const { pathname } = useLocation(); // current pathname

  const { address } = useAccount();


  const [flag, setFlag] = useState(0);
  const [Connected, setConnected] = useState(false);
  const [userBalance, setUserBalance] = useState('');

  const [scrolled, setScrolled] = useState(false);
  const [pixelScrolled, setPixelScrolled] = useState(0);

  const hexToDecimal = (hex) => {
    return parseInt(hex, 16);
  }

  /*------------code to get account balance of the user------------*/
    const settings = {
      apiKey: "L5y5rMAxy2S29WmJJkgz8x4iCkLzSEoV",
      network: Network.MATIC_MUMBAI,
    };
    const alchemy = new Alchemy(settings);

    useEffect(()=>{
      if(Connected){
        alchemy.core.getBalance(`${address}`, "latest")
        .then(response => setUserBalance((hexToDecimal(response._hex)/10**18).toFixed(2)));
        // console.log('balalance testing : ', userBalance);
        // console.log('balalance testing : ', userBalance);
        dispatch(
          accountAdded(address, userBalance)
        );
      }else if(!Connected) {
        dispatch(
          accountAdded('', '')
        );
      }
    });
  /*---------------------------------------------------------------*/


    console.log('account detail is: ', getAccountDetail);

    window.onscroll = function (e) {
      setPixelScrolled(window.scrollY);
    };

    useEffect(()=> {
      if(window.scrollY >= 781 ){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    })

    useEffect( () => {
      if(Connected && flag==0){
        toast.success("Logged In", {
          position: toast.POSITION.TOP_CENTER
        });
        setFlag(1);
      }else if(!Connected && flag==1 ){
        if(pathname == '/dashboard'){
          navigate('/');
        }
        toast.success("Logged Out", {
          position: toast.POSITION.TOP_CENTER
        });
        setFlag(0);
      }
    });

    const dashboardHandle = () => {
      toast.info("Login to proceed", {
      position: toast.POSITION.TOP_CENTER
      });
    }

    return (
        <Container style={{
           backgroundImage: scrolled ? 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,0.2) 17.8%, rgba(2,245,255,0.25) 100.2% )' : '',
        }}>
          <LeftSection>
            <div>
              <p>Metropolis</p>
            </div>
          </LeftSection>
          <MiddleSection>
            <div className="dashboard-div">
              { Connected ? <Link to="/dashboard" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }) }>
                 <p>
                   Dashboard
                 </p>
                 </Link> :
                 <p onClick={dashboardHandle}>
                   Dashboard
                 </p>
              }
            </div>
          </MiddleSection>
          <RightSection>
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
                    <div className="login" onClick={show}>
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
  margin-left: 15rem;
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
  width: 1094.5px;
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

      p {
        font-size: 16.5px;
        margin: 0;
        cursor: pointer;
        position: relative;

        &:hover {
          opacity: 0.8;
        }
      }

      a {
        color: black;
        text-decoration: none;
      }
  }
`

const RightSection=styled.div`
  width: 120px;
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
