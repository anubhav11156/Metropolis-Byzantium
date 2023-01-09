import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TakeLoan from './TakeLoan';
import Deposit from './Deposit';
import History from './History';
import UserAccount from './UserAccount';
import { selectAccount } from '../features/AccountDetailSlice';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Resolution from "@unstoppabledomains/resolution";

export default function Loan() {

  const getAccountDetail = useSelector(selectAccount);

  const [loanMenu, setLoanMenu] = useState(false);
  const [depositMenu, setDepositMenu] = useState(true);
  const [historyMenu, setHistoryMenu] = useState(false);
  const [guideMenu, setGuideMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [unsDomain, setUnsDomain] = useState('');

  /*--------------use unstopable domain resolution APIs to fetch domain name-------------*/

  useEffect( () => {
    reverseUrl(getAccountDetail.address);
  },[getAccountDetail.status]);

  const resolution = new Resolution();

  function reverseUrl(address) {
    resolution
      .reverse(address, { location: 'UNSLayer2' })
      .then((domain) => setUnsDomain(domain))
      .catch(console.error);
  }
  
  /*-------------------------------------------------------------------------------------*/


  const userMenuButton = () => {
    setUserMenu(true);
    setLoanMenu(false);
    setDepositMenu(false);
    setHistoryMenu(false);
    setGuideMenu(false);
  }

  const loanMenuButton = () => {
    setLoanMenu(true);
    setDepositMenu(false);
    setHistoryMenu(false);
    setGuideMenu(false);
    setUserMenu(false);
  }

  const depositMenuButton = () => {
    setLoanMenu(false);
    setDepositMenu(true);
    setHistoryMenu(false);
    setGuideMenu(false);
    setUserMenu(false);
  }

  const historyMenuButton = () => {
    setLoanMenu(false);
    setDepositMenu(false);
    setHistoryMenu(true);
    setGuideMenu(false);
    setUserMenu(false);
  }

  const guideHandle = () => {
    setLoanMenu(false);
    setDepositMenu(false);
    setHistoryMenu(false);
    setGuideMenu(true);
    setUserMenu(false);
  }

  const connectWalletHandle = () => {
    toast.info("Click on Login to connect wallet", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <Container>

      <SiderBar>
        <div className='menu'>
          <div className='user-menu'>
            <div className='image'>
              <img src="/images/user.png" onClick={userMenuButton} />
            </div>
            <div className='bar' style={{
              backgroundColor: userMenu ? "#ffffffae" : ""
            }}></div>
          </div>
          <div className='deposit-menu'>
            <div className='image'>
              <img src="/images/deposit.png" onClick={depositMenuButton} />
            </div>
            <div className='bar' style={{
              backgroundColor: depositMenu ? "#ffffffae" : ""
            }}></div>
          </div>
          <div className='loan-menu'>
            <div className='image'>
              <img src="/images/take-loan.png" onClick={loanMenuButton} />
            </div>
            <div className='bar' style={{
              backgroundColor: loanMenu ? "#ffffffae" : ""
            }}></div>
          </div>
          <div className='history-menu'>
            <div className='image'>
              <img src="/images/loan-history.png" onClick={historyMenuButton} />
            </div>
            <div className='bar' style={{
              backgroundColor: historyMenu ? "#ffffffae" : ""
            }}></div>
          </div>
          <div className='guide-menu'>
            <div className='image'>
              <img src="/images/guide.png" onClick={guideHandle} />
            </div>
            <div className='bar' style={{
              backgroundColor: guideMenu ? "#ffffffae" : ""
            }}></div>
          </div>
        </div>
      </SiderBar>
      <LoanSection>
        <div className='heading-section'>
          <div className='text'>
            <p>Take Secure & Private Loan</p>
          </div>
          <div className='loan-icon-div'>
            <img src="https://res.cloudinary.com/polygontech/image/upload/f_auto,q_auto,dpr_2,w_48,h_48/Polygon_Nightfall_3f914447dc" />
          </div>
        </div>
        <LoanContainer>
          {/* {getAccountDetail.status &&
             */}
          {true &&
            <>
              {userMenu &&
                <UserAccount />
              }
              {loanMenu &&
                <TakeLoan />
              }
              {depositMenu &&
                <Deposit />
              }
              {historyMenu &&
                <History />
              }
            </>
          }
          <>
            {/* { !getAccountDetail.status &&
              <PlaceHolder>
              <div className='div-1'>
                <div className='text'>
                  <p>
                    Instant Private Loan using Polygon NightFall
                  </p>
                </div>
                <div className='for-button'>
                  <div className='connect' onClick={connectWalletHandle}>Connect Wallet</div>
                </div>
              </div>
            </PlaceHolder>
            } */}
          </>


        </LoanContainer>
        {/* <button onClick={() => {
          console.log('clicked');
          fetchMyPurchase()
        }}
        >fetch</button> */}
      </LoanSection>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
      />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 0.6rem;
  width: 70%;
  height: 660px;
  border-radius: 20px;
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);
  overflow: hidden;
  display: flex;
  overflow: hidden;

  .Toastify__toast {
    border: 1px solid rgba(115, 55, 219, 0.468);
  }
`

const SiderBar = styled.div`
  width: 7%;
  background-color: rgb(130, 71, 229);
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(76, 75, 75, 0.324);
  display: flex;
  justify-content: center;

  .menu {
    margin-top: 6rem;
    height: 21.5rem;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .user-menu {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .image {
        flex:1;
        width: 45%;
        display: flex;
        align-items: end;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.25s;

        &:hover {
          opacity: 0.8;
        }

        img {
          width: 100%;
          opacity: 0.9;
        }

       
      }

      .bar {
        margin-top: 6px;
        height: 0.2rem;
        width: 45%;
        border-radius: 10px;
      }
    }

    .loan-menu {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .image {
        flex:1;
        width: 45%;
        display: flex;
        align-items: end;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.25s;

        &:hover {
          opacity: 0.8;
        }

        img {
          width: 100%;
          opacity: 0.9;
        }

       
      }

      .bar {
        margin-top: 6px;
        height: 0.2rem;
        width: 45%;
        border-radius: 10px;
      }
    }

    .deposit-menu {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .image {
        flex:1;
        width: 45%;
        display: flex;
        align-items: end;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.25s;

        &:hover {
          opacity: 0.8;
        }

        img {
          width: 100%;
          opacity: 0.9;

        }
      }

      .bar {
        margin-top: 6px;
        height: 0.2rem;
        width: 45%;
        border-radius: 10px;        
      }
    }

    .history-menu {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .image {
        flex:1;
        width: 45%;
        display: flex;
        align-items: end;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.25s;

        &:hover {
          opacity: 0.8;
        }

        img {
          width: 100%;
          opacity: 0.9;

        }
      }

      .bar {
        margin-top: 6px;
        height: 0.2rem;
        width: 45%;
        border-radius: 10px;
      }
    }

    .guide-menu {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .image {
        flex:1;
        width: 45%;
        display: flex;
        align-items: end;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.25s;

        &:hover {
          opacity: 0.8;
        }

        img {
          width: 100%;
          opacity: 0.9;
        }
      }

      .bar {
        margin-top: 6px;
        height: 0.2rem;
        width: 45%;
        border-radius: 10px;  
      }
    }
  }

`

const LoanSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
 

  .heading-section {
    height: 4.7rem;
    width: 100%;
    border-bottom: 1px rgba(129, 71, 230, 0.284) solid;
   
    background-color: white;
    display: flex;
    justify-content: start;

    .text {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
    

      p {
        padding-left: 26px;
        margin: 0;
        flex: 1;
        font-size: 33px;
        font-weight: 600;
        color: rgb(107, 35, 227);
     
    }
    }
    

    .loan-icon-div {

      flex: 1;
      display: flex;
      justify-content: end;
      align-items: center;

      img {
        margin-right: 26px;
        height: 52px;
      }
      
    }
  }
`

const LoanContainer = styled.div`
  flex: 1;
  display: flex;
  
`

const PlaceHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .div-1 {
    /* border: 1px solid black; */
    margin-left: 26px;
    margin-right: 30px;
    width: 70%;
    height: 70%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='29' ry='29' stroke='%238347E5FF' stroke-width='3' stroke-dasharray='14' stroke-dashoffset='5' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 29px;
    background-color: rgba(129, 71, 230, 0.107);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .text {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      p {
        margin-top: 8.3rem;
        height: 4rem;
        width: 20rem;
        font-weight: 400;
        font-size: 25px;
        text-align: center;
        color: rgb(121, 53, 239);
      }
    }

    .for-button {
      flex: 1;
      display: flex;
      align-items: start;

      .connect {
        margin-top: 10px;
        width: 9rem;
        height: 2.2rem;
        background-color: rgb(130, 71, 229);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;
        color: white;
        font-size: 15px;

        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.85;
        }
      }
    }
    
  }
`
