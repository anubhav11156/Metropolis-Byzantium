import { useState, useEffect, React } from 'react'
import styled from 'styled-components'
import ListingCard from './ListingCard'
import {testing} from './Testing'
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../config";
import axios from "axios";

function Listing() {

  const [loaded, setLoaded] = useState(false);
  const [nfts, setNfts] = useState([]);

  useEffect( ()=> {
    fetchListing();
  },[])

  const fetchListing = async () => {
    const modal = new web3modal();
    const connection = await modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer)
    const data = await contract.fetchMyListings();
    const items = await Promise.all(
      data.map(async (i) => {
        //when the array of promises is resolved then map over each promise
        const tokenUri = await contract.tokenURI(i.tokenId.toString());
        const trimmedTokenUri = tokenUri.substring(7);
        const finalUri = `https://ipfs.io/ipfs/${trimmedTokenUri}`;
        const meta = await axios.get(finalUri);
        let price = ethers.utils.formatEther(i.price);
        let royalty = ethers.utils.formatEther(i.royaltyFeeInBips);
        let item = {
            price,
            royalty,
            name: meta.data.name,
            tokenId: i.tokenId.toNumber(),
            image: `https://ipfs.io/ipfs/${(meta.data.image).substring(7)}`,
        };
        return item;
      })
    );
    setNfts(items);
    setLoaded(true);
  }
  const cards = nfts.map( card => {
    return (
      <ListingCard
        id={card.tokenId}
        name={card.name}
        price={card.price}
        royalty={card.royalty}
        image={card.image}
      />
    )
  })


    return (
        <Container>
          <Heading>
            <p>Your Creation</p>
          </Heading>
          <MainSection>
            {cards}
          </MainSection>
        </Container>
    )
}

export default Listing

const Container=styled.div`
  margin-left: 30px;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
`

const Heading=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: rgba( 255, 255, 255, 0.5 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  box-shadow: 0px 5px 15px rgba(184, 184, 184, 0.1);
  border: 2px solid white;

  p {
    margin: 0;
    padding: 6px;
    margin-left: 10px;
    font-size: 2.2rem;
    font-weight: 500;
    color: #0D004D;
    opacity: 0.8;
  }
`
const MainSection=styled.div`
  padding-bottom: 50px;
  flex:1;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 66px;
  grid-row-gap: 48px;

`
