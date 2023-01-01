import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../MetropolisConfig";
import axios from "axios";




export default function Loan() {

  ;

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

  return (
    <Container>

      <SiderBar>
        <div className='menu'>
          <div>
            <img src="/images/take-loan.png"/>
          </div>
          <div>
            <img src="/images/deposit.png"/>
          </div>
          <div>
            <img src="/images/loan-history.png"/> 
          </div>
          <div>
            <img src="/images/guide.png"/>
          </div>

        </div>
      </SiderBar>
      <LoanSection>
        <div className='heading-section'>
          <div className='text'>
            <p>Take Secure & Private Loan</p>
          </div>
          <div className='loan-icon-div'>
            <img src="/images/loan-1.png" />
          </div>
        </div>
        <LoanContainer>


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
    margin-top: 9rem;
    height: 300px;
    width: 60px;
    display: flex;
    flex-direction: column;
    
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  

      img {
        width: 42%;
        opacity: 0.9;
      cursor: pointer;

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
