import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import uauthBNCModule from '@uauth/web3-onboard'
import UAuth from '@uauth/js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { accountAdded } from '../features/AccountDetailSlice';
import { ethers } from "ethers";
import web3modal from "web3modal";
import { userMnemonicContractAddress, userMnemonicContractAbi } from '../config'
import { createUserFirstTime } from './Utils';

function Header() {

  const dispatch = useDispatch();

  const coinbaseApiUserName = process.env.REACT_APP_CB_USERNAME;
  const coinbaseApiPassword = process.env.REACT_APP_CB_PASSWORD;
  const baseUrl = "https://goerli.ethereum.coinbasecloud.net";

  const [userAddress, setUserAddress] = useState('');
  const [userNightFallMnemonic, setUserNightFallMnemonic] = useState('');
  const [connected, setConnected] = useState(false);
  const [userDomain, setUserDomain] = useState('');
  const [isUNSLogin, setUNSLogin] = useState(false);
  const [label, setLabel] = useState('');
  const[ isLenghtZero, setIsLenghtZero] = useState(false);


  const unstoppableClientID = process.env.REACT_APP_UNSTOPPABLE_DOMAIN_CLIENT_ID;
  const alchemyId = process.env.REACT_APP_ALCHEMY_API_KEY;


  const goerliUrl = `https://eth-goerli.g.alchemy.com/v2/${alchemyId}/`;

  const injected = injectedModule();

  const uauth = new UAuth({
    clientID: `${unstoppableClientID}`,
    // redirectUri: 'http://localhost:5173',
    redirectUri: 'https://byzantiium.web.app/',
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
      }
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
          toast.success("Logged In", {
            position: toast.POSITION.TOP_CENTER
          });
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
          setUserDomain('');
          setUNSLogin(false);
          toast.success("Logged Out", {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }

    await onboard.disconnectWallet({ label: label })
      .then(() => {
        setUserAddress('');
        setLabel('');
        setConnected(false);
        setUserDomain('');
        toast.success("Logged Out", {
          position: toast.POSITION.TOP_CENTER
        });
      })

  }


  // console.log('address length : ', userAddress.length);
  // console.log('domain : ', userDomain);
  // console.log('lable : ',label);
  // console.log('uns login : ', isUNSLogin);




  // to get the domain name when user login with his/her UNS domain.
  useEffect(() => {
    uauth.user()
      .then((user) => {
        setUserDomain(user.sub);
        if (user.sub.length != 0) {
          setUNSLogin(true);
        }
      })
  }, [userAddress]);


  // send account data to redux store if user wallet is connected
  useEffect(() => {
    if (connected) {
      getUserMnemonic();
      // console.log('mne test if user exists : ', userNightFallMnemonic);
      // dispatch(
      //   accountAdded(userAddress, userDomain, connected)
      // )
    } else {
      dispatch(
        accountAdded('', '', '', false)
      );
    }
  }, [connected]);




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

  const getUserMnemonic = async () => {

    const provider = new ethers.providers.JsonRpcProvider({
      url: baseUrl,
      user: coinbaseApiUserName,
      password: coinbaseApiPassword
    })

    const contract = new ethers.Contract(
      userMnemonicContractAddress,
      userMnemonicContractAbi.abi,
      provider
    );

    const data = await contract.getMnemonic(userAddress)
    
    console.log('data received is : ',data.length);
    // if lenght is zero then create nightfall account else load mnemonic from the contract
    if(!data.length){
      createUserFirstTime()
          .then((response) => {
            setUserNightFallMnemonic(response.nightfallMnemonic);
            setUserMnemonic(response.nightfallMnemonic);
            dispatch(
              accountAdded(userAddress, userDomain, response.nightfallMnemonic, connected)
            )
          });
    }else {
      setUserNightFallMnemonic(data);
      dispatch(
        accountAdded(userAddress, userDomain, data, connected)
      )
    }
    return data;
  }


  // this should be called only when use don't have nightfall account
  const setUserMnemonic = async (nightMnemonic) => {
    const modal = new web3modal({
      network: "goerli",
      cacheProvider: true,
    });
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      userMnemonicContractAddress,
      userMnemonicContractAbi.abi,
      signer
    );

    const tx = await contract.setMnemonic(userAddress,nightMnemonic, {
      gasLimit: 1000000,
    });

    await tx.wait()
    .then( () => {
      console.log('written success');
      toast.success("NightFall account created.", {
        position: toast.POSITION.TOP_CENTER
      });
    }).catch( () => {
      console.log('transaction failed')
      toast.error("Failed to create NightFall account.", {
        position: toast.POSITION.TOP_CENTER
      });
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

          {(connected && isUNSLogin) &&
            <>
              <div className='address-uns-div'>

                <div className='domain-div'>
                  <div className='logo-div'>
                    <img src="/images/uns.png" />
                  </div>
                  <p className='domain-name'>
                    {userDomain}
                  </p>
                </div>

                <div className='userAddress'>
                  <p>
                    {userAddress}
                  </p>
                </div>

              </div>
              <div className='login' onClick={logoutHandler}>Logout</div>
            </>
          }

          {(connected && !isUNSLogin) &&
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
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
      />
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

  .Toastify__toast {
    border: 1px solid rgba(115, 55, 219, 0.468);
  }

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
    margin-left: 10px;
    margin-right: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 29px;

    .logo-div {
      margin-left: 5px;
      margin-right: -5px;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 3px;
        width: 100%;
      }
    }

    p {
        width: 145px;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
    }

  }

  .address-uns-div {
    flex: 1;
    background-color: rgba(129, 71, 230, 0.119);
    border: 1px solid rgba(130, 71, 230, 0.4);

    margin-left: 10px;
    margin-right: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    

    border-radius: 10px;
    height: 70px;

    .domain-div {
      flex:1;
      border-bottom: 1px solid ;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(130, 71, 230, 0.4);
  
      font-size: 12px;
      width: 100%;

      .logo-div {
        margin-left: 10px;
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          border-radius: 3px;
          width: 100%;
        }
      }

      .domain-name {
        margin: 0;
        width: 145px;
        margin-left: -3px;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
      }

    
    }

    .userAddress {
      flex: 1;
    
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 0px;
      width: 100%;

      p {
        width: 140px;
        margin: 0;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
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
