import { useState, useEffect, React } from 'react'
import styled from 'styled-components'
import StoreNFTCard from './StoreNFTCard'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../config";
import axios from "axios";


function Market() {

  const [loaded, setLoaded] = useState(false);
  const [nfts, setNfts] = useState([]);

  const coinbaseApiUserName = process.env.REACT_APP_CB_USERNAME;
  const coinbaseApiPassword = process.env.REACT_APP_CB_PASSWORD;
  const baseUrl = "https://goerli.ethereum.coinbasecloud.net";

/*--------Coinbase Node setup--------*/

  // const coinbaseSettings = {
  //   url:'https://goerli.ethereum.coinbasecloud.net',
  //   apiUserName: `${coinbaseApiUserName}`,
  //   apiPassword: `${coinbaseApiPassword}`,
  // }

  // const coinbasecloud = new CoinbaseCloud(coinbaseSettings);

/*-----------------------------------*/


/*-----------------Code to Fetch NFT from contract----------------*/
  useEffect( ()=> {
    fetchNFTs();
  },[])

 

  const fetchNFTs = async () => {

    const provider = new ethers.providers.JsonRpcProvider({
      url: baseUrl,
      user: coinbaseApiUserName,
      password: coinbaseApiPassword
    })
  
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      provider
    );
    
    const data = await contract.fetchMarket();
    const items = await Promise.all(
      data.map(async (i) => {
        //when the array of promises is resolved then map over each promisemui   S 8YUIOP[] C
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

  useEffect( ()=> {
    if(nfts.length != 0 ){
      setLoaded(true);
    }else{
      setLoaded(false);
    }
  },[nfts.length])

  console.log('nfts are : ', nfts);
  console.log('isLoaded : ', loaded);

  const cards = nfts.map( card => {
    return (
      <StoreNFTCard
        id={card.tokenId}
        name={card.name}
        price={card.price}
        royalty={card.royalty}
        image={card.image}
      />
    )
  })

/*-------------------------------------------------------------------*/

    return (
        <Container>
          <BackgroundImage>
            <div className="left">
              <img src="/images/grad-left.png"/>
            </div>
            <div className="right">
              <img src="/images/grad-right.svg"/>
            </div>
          </BackgroundImage>
          <StoreSection>
            <Element name="market" className="heading">
              <p>
                Explore, Buy NFTs
              </p>
            </Element>
            {
              loaded &&
              <div className="marketplace">
              {cards}
            </div>
            }
            {
              !loaded &&
              <div className='loading'>
                <p>Loading NFTs...</p>
              </div>
            }
          </StoreSection>

        </Container >
    )
}

export default Market

const Container=styled.div`
  height: auto;
  min-height: 1544px;
  width: 100%;
  position: relative;
`
const BackgroundImage=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  display: flex;

  .left {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
  }

  .right {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StoreSection=styled.div`
  height: auto;
  min-height: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;


  .heading {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 183px;

    p {
      margin-top: 90px;
      font-size: 48px;
      font-weight: 600;
      color: #0D004D;
    }
  }

  .marketplace {
    flex: 1;
    margin-right: 15rem;
    margin-left: 15rem;
    padding-top: 25px;
    padding-bottom: 95px;
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-column-gap: 69.5px;
    grid-row-gap: 46px;
  }

  .loading {
    flex:1;
    margin-right: 15rem;
    margin-left: 15rem;
    display: flex;
    align-items: start;
    justify-content: center;

    p {
      margin-top: 120px;
      font-size: 22px;
    }
  }

`
