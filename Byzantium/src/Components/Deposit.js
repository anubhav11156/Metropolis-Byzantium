import { React, useState, useEffect } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectAccount } from '../features/AccountDetailSlice';
import { makeDeposit, makeDepositERC721 } from './Utils';

function Deposit() {

  const getAccountDetail = useSelector(selectAccount);

  const [isEthClicked, setIsEthClicked] = useState(false);
  const [isMaticClicked, setIsMaticClicked] = useState(false);
  const [isUsdcClicked, setIsUsdcClicked] = useState(false);
  const [amount, setAmount] = useState();
  const [tokenId, setTokenId] = useState('');
  const [tokenContractAddress, setTokenContractAddress] = useState('');


  const gETHContractAddress = "";
  const usdcContractAddress = "0x07865c6e87b9f70255377e024ace6630c1eaa37f";
  const maticContractAddress = "0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae";
  const metropolisContractAddress = "0xB389ad3206dFc7E3F4B55Bb8470Aa48b04155281";

  const ethHandler = () => {
    setIsEthClicked(true);
    setIsMaticClicked(false);
    setIsUsdcClicked(false);
    setTokenContractAddress(gETHContractAddress);
  }

  const maticHandler = () => {
    setIsEthClicked(false);
    setIsMaticClicked(true);
    setIsUsdcClicked(false);
    setTokenContractAddress(maticContractAddress);
  }

  const usdcHandler = () => {
    setIsEthClicked(false);
    setIsMaticClicked(false);
    setIsUsdcClicked(true);
    setTokenContractAddress(usdcContractAddress);
  }

  
  const depositERC20Handle = () => {
    
    makeDeposit(getAccountDetail.nightfallMnemonic, tokenContractAddress, amount)
    .then(response => console.log(response));

    setIsEthClicked(false);
    setIsMaticClicked(false);
    setIsUsdcClicked(false);
    setTokenContractAddress('');

    const inputBox = document.getElementById('amount-input');
    inputBox.value = '';
  }

  
  const depositERC721Handle = () => {
    makeDepositERC721(getAccountDetail.nightfallMnemonic, metropolisContractAddress, tokenId)
    .then(response => console.log(response));
    const inputBox = document.getElementById('tokenId-input');
    inputBox.value = '';
  }

  return (
    <Container>
      <div className='title'>
        <div className='acccount'>
          <div className='image'>
            <img src="/images/deposit.png" />
          </div>
          <p>Deposit</p>
        </div>
      </div>
      <DepositSection>
        <div className='left'>
          <div className='title'>
            <p>ERC 20</p>
          </div>
          <div className='tokens'>
            <div className='eth' onClick={ethHandler} style={{
              backgroundColor: isEthClicked ? 'rgba(129, 71, 230, 0.267)' : ''
            }}>
              <img src="/images/ethereum-1.svg" />
            </div>
            <div className='matic' onClick={maticHandler} style={{
              backgroundColor: isMaticClicked ? 'rgba(129, 71, 230, 0.267)' : ''
            }}>
              <img src="/images/polygon-purple.png" />
            </div>
            <div className='usdc' onClick={usdcHandler} style={{
              backgroundColor: isUsdcClicked ? 'rgba(129, 71, 230, 0.267)' : ''
            }}>
              <img src="/images/usdc-logo.svg" />
            </div>
          </div>
          <div className='input-box'>
            <input type="text" id="amount-input" placeholder="Amount" onChange={(props) => {
              if(isEthClicked){
                let value = (props.target.value)*(10 ** 18);
                setAmount(value.toString())
              } else if (isMaticClicked){
                // let value = (props.target.value)*(10 ** 18);
                let value = (props.target.value);
                setAmount(value.toString())
              } else if(isUsdcClicked){
                // let value = (props.target.value)*(10 ** 6);
                let value = (props.target.value);
                setAmount(value.toString())
              }  
            }}
            />
          </div>
          <div className='deposit'>
            <div className='button' onClick={depositERC20Handle}>
              Deposit to L2
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='title'>
            <p>ERC 721</p>
          </div>
          <div className='not-title'>
            <div className='input-box'>
              <input type="text" placeholder='Token Id' id="tokenId-input"
                onChange={ (props) => {
                  setTokenId(props.target.value);
                }}
              />
            </div>
            <div className='deposit'>
              <div className='button' onClick={depositERC721Handle}>
                Deposit to L2
              </div>
          </div>
          </div>
        </div>
      </DepositSection>
    </Container>
  )
}

export default Deposit

const Container = styled.div`
   
    
   width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
        height: 2.3rem;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
        padding-left: 26px;
        .acccount {

            width: 6rem;
            padding-right: 10px;
            height: 25px;
            background-color: rgb(130, 71, 229);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            overflow: hidden;

            .image {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
               
                img {
                    margin-left: -5px;
                    width: 60%;
                }
            }

            p {
          
               color: white;
            }
        }
    }

`

const DepositSection = styled.div`
  flex:1;
  padding-left: 26px;
  padding-right: 30px;
  padding-top: 60px;
  padding-bottom: 20px;
  display: flex;  
  justify-content: space-between;
  gap: 8rem;

 

    .left {
      flex: 1;
      height: 70%;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(130, 71, 230, 0.4);
      border-radius: 3px;
      
      .title {
        height: 2.8rem;
        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
        background-color: rgba(129, 71, 230, 0.267);
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          margin: 0;
          color: rgba(92, 12, 231, 0.806);
          font-weight: 500;
        }
      }

      .tokens {
        margin-top: 10px;
        height: 5rem;

        display: flex;
        justify-content: space-around;
        align-items: center;
    
        .eth,
        .matic,
        .usdc {
          height: 3rem;
          width: 3rem; 
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px black solid;
          border: 1px solid rgba(130, 71, 230, 0.4);
          border-radius: 3px; 
          cursor: pointer;
          transition: background-color 0.15s;
          img {
            width: 50%;
          }

          &:hover {
            background-color: rgba(129, 71, 230, 0.267);
          }
        }

        .eth {
          height: 2.5rem;
          width: 2.5rem; 
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px black solid;
          border: 1px solid rgba(130, 71, 230, 0.4);
          border-radius: 3px;
          cursor: pointer;

          img {
            width: 40%;
          }
        }
      }

      .input-box {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2rem;


        input {
          border: 1px black solid;
          width: 24.5rem;
          height: 100%;
          border: 1px solid rgba(130, 71, 230, 0.4);
          border-radius: 3px;
          padding-left: 10px;
          color: rgba(92, 12, 231, 0.806);
          font-weight: 500;
          font-size: 17px;
        }
      }

      .deposit {
        margin-top: 1.5rem;
        width: 100%;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;


        .button {
          width: 25.1rem;
          
          height: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          color: white;
          background-color: rgb(130, 71, 229);
          cursor: pointer;
          transition: opacity 0.15s;

          &:hover {
            opacity: 0.95;
          }
        }
      }
      
    }

    .right {
      flex: 1;
      height: 70%;
      display: flex;
      flex-direction: column;

      border: 1px solid rgba(130, 71, 230, 0.4);
      border-radius: 3px;
     
      .title {
        height: 2.8rem;
        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
        background-color: rgba(129, 71, 230, 0.267);
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          margin: 0;
          color: rgba(92, 12, 231, 0.806);
          font-weight: 500;
        }
      }

      .not-title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .input-box {
          margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2rem;


        input {
          border: 1px black solid;
          width: 24.5rem;
          height: 100%;
          border: 1px solid rgba(130, 71, 230, 0.4);
          border-radius: 3px;
          padding-left: 10px;
          color: rgba(92, 12, 231, 0.806);
          font-weight: 500;
          font-size: 17px;
        }
        }

        

      }

      .deposit {
          margin-top: 1.5rem;
          width: 100%;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;


          .button {
            width: 25.1rem;
            
            height: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            color: white;
            background-color: rgb(130, 71, 229);
            cursor: pointer;
            transition: opacity 0.15s;

              &:hover {
                opacity: 0.95;
              }
            }
        }

    }
`