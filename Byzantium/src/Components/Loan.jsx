import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../MetropolisConfig";
import axios from "axios";


export default function Loan() {

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
    setMyNfts(items);
  }

  console.log('nfts are : ',myNFts);

  return (
    <Container>
      Loan
      <button onClick={() => {
        console.log('clicked');
        fetchMyPurchase()
      }}
      >fetch</button>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 0.6rem;
  width: 70%;
  flex:1;
  border-radius: 20px;
  border: 1px solid rgba(130, 71, 230, 0.4);
  box-shadow: 0px 2px 10px rgba(111, 108, 108, 0.15);
  overflow: hidden;
  
`
