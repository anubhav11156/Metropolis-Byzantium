import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../MetropolisConfig";
import axios from "axios";
import TakeLoan from './TakeLoan';
import Deposit from './Deposit';
import History from './History';
import UserAccount from './UserAccount';

export default function Loan() {


  const [loanMenu, setLoanMenu] = useState(false);
  const [depositMenu, setDepositMenu] = useState(false);
  const [historyMenu, setHistoryMenu] = useState(false);
  const [guideMenu, setGuideMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(true);
  // fetch your nfts
  const [myNFts, setMyNfts] = useState([]);

  // useEffect(() => {
  //   fetchMyPurchase();
  // },[]);

  const fetchMyPurchase = async () => {

    const modal = new web3modal();
    const connection = await modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)

    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      signer
    )
    console.log('signer is : ', signer)
    const data = await contract.fetchMyNFTs();
    const items = await Promise.all(
      data.map(async (i) => {
        //when the array of promises is resolved then map over each promise
        const tokenUri = await contract.tokenURI(i.tokenId.toString());
        const trimmedTokenUri = tokenUri.substring(7);
        const finalUri = `https://ipfs.io/ipfs/${trimmedTokenUri}`;
        const meta = await axios.get(finalUri);
        let price = ethers.utils.formatEther(i.price);
        let royalty = ethers.utils.formatEther(i.royaltyFeeInBips);
        let usdValue = ethers.utils.formatEther(i.usdValue);
        let item = {
          price,
          royalty,
          usdValue,
          name: meta.data.name,
          tokenId: i.tokenId.toNumber(),
          image: `https://ipfs.io/ipfs/${(meta.data.image).substring(7)}`,
        };
        return item;
      })
    );
    console.log('nfts are : ', items)
    setMyNfts(items);
  }

  // console.log('nfts are : ',myNFts);
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
          { userMenu &&
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
        </LoanContainer>
        {/* <button onClick={() => {
          console.log('clicked');
          fetchMyPurchase()
        }}
        >fetch</button> */}
      </LoanSection>
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
`
