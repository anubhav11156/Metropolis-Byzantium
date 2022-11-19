import { useState, useEffect, React } from 'react'
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { NFTStorage, File } from 'nft.storage'
import BarLoader from "react-spinners/BarLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import web3modal from "web3modal";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../config";

function Create() {

  const [isLoadingBarActive, setIsLoadingBarActive] = useState(false);
  const [formInput, setFormInput] = useState({
   name:"",
   price:"",
   royalty:""
  });

  const [uri, setUri] = useState('');
  const [isMinting, setIsMinting] = useState(false);

  /*-----------------------------code for uploading data to filecoin using NFT.Storage-----------------------------*/

  // const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE5RmY2NmNlYTUxMzlmMDY4YjQxNDIwMGFjRmRhN0JDQzRjNTZFM0EiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODcyNzA5Nzc0NywibmFtZSI6Ik1ldHJvcG9saXMifQ.XpfgbPMc6zK28Le28GNi44zKWEabZC4N2b37ihDKppY';

  const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE5RmY2NmNlYTUxMzlmMDY4YjQxNDIwMGFjRmRhN0JDQzRjNTZFM0EiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODcyNzA5Nzc0NywibmFtZSI6Ik1ldHJvcG9saXMifQ.XpfgbPMc6zK28Le28GNi44zKWEabZC4N2b37ihDKppY' })

  const contentHandle = async () => {

  const { name, price, royalty } = formInput;

  const fileInput = document.getElementById('content');
  const filePath = fileInput.files[0].name;
  const fileType = fileInput.files[0].type;

  setIsLoadingBarActive(true);

  const metadata = await client.store({
    name: `${name}`,
    description: `${royalty}`,
    image: new File(
      [
        fileInput.files[0]
      ],
      `${filePath}`,
      { type: `${fileType}` }
    ),
  });

  setIsLoadingBarActive(false);

  toast.success("Uploaded to IPFS", {
        position: toast.POSITION.TOP_CENTER
  });

  setUri(metadata.url);
}
/*-----------------------------------------------------------------------*/

// console.log('uri is : ', uri);

/*-----------------code for minting the NFT------------------------------*/

const mintToken = async () => {

  setIsMinting(true);

  const modal = new web3modal({
     network: "mumbai",
     cacheProvider: true,
  });
 const connection = await modal.connect();
 const provider = new ethers.providers.Web3Provider(connection);
 const signer = provider.getSigner();
 const contract = new ethers.Contract(
     contractAddress,
     contractAbi.abi,
     signer
 );
 const price = ethers.utils.parseEther(formInput.price);
 const publish = await contract.createToken(uri, price, formInput.royalty, {
     gasLimit: 1000000,
 });
 await publish.wait()
    .then( () => {
      toast.success("Token Minted Successfully.", {
      position: toast.POSITION.TOP_CENTER
      });
      setIsMinting(false);
    }).catch( () => {
      toast.error("Failed to mint token.", {
        position: toast.POSITION.TOP_CENTER
      });
       setIsMinting(false);
    })
}

/*-----------------------------------------------------------------------*/
    return (
        <Container>
          <Background></Background>
          <Heading>
            <div className="heading-div">
              <p>Create new NFT</p>
            </div>
            <div className="logo-div">
              <img src="/images/pattern1.png"/>
            </div>
          </Heading>
          <MainForm>
            <Name>
              <div className="name-div">
                <p>Name</p>
              </div>
              <div className="name-input">
                <input name="name" onChange={
                  (prop) => setFormInput({
                    ...formInput,
                    name: prop.target.value
                  })
                } placeholder="Name of NFT" required/>
              </div>
            </Name>
            <PriceRoyalty>
              <div className="left-div">
                <div className="price-div">
                  <p>Price</p>
                </div>
                <div className="price-container">
                  <div className="logo-div">
                    <img src="/images/polygon-purple.png"/>
                  </div>
                  <div className="price-input">
                    <input name="price" onChange={
                      (prop) => setFormInput({
                        ...formInput,
                        price: prop.target.value
                      })
                    } placeholder="2 MATIC" required/>
                  </div>
                </div>
              </div>
              <div className="right-div">
                <div className="royalty-div">
                  <p>Royalty</p>
                </div>
                <div className="royalty-container">
                  <div className="pct-div">
                    <img src="/images/pct.png"/>
                  </div>
                  <div className="royalty-input">
                    <input name="royalty" onChange={
                      (prop) => setFormInput({
                        ...formInput,
                        royalty: (prop.target.value)*100
                      })
                    } placeholder="Maximum 20%" required/>
                  </div>
                </div>
              </div>
            </PriceRoyalty>
            <ChooseFile>
              <div className="top">
                 <input className="uploadContent" type="file" id="content" onChange={contentHandle}/>
              </div>
              <div className="bottom">
                {
                  isLoadingBarActive &&
                  <BarLoader color="rgb(255, 255, 255)"
                    size={15}
                  />
                }
              </div>
            </ChooseFile>
            <Gap></Gap>
            <Mint>
              <div className="mint-button" onClick={mintToken}>
                {
                 isMinting ? <PropagateLoader
                 color="rgb(255, 255, 255, 0.7)"
                 size={12}
               /> : <p>Mint Token</p>
              }
              </div>
            </Mint>
          </MainForm>
        </Container>
    )
}

export default Create

const Container=styled.div`
  margin-left: 10px;
  width: 700px;
  height: 790px;
  border-radius: 3px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 4px 10px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 2px solid rgba( 255, 255, 255, 0.18 );
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

`
const Background=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  background-image: linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% );
  opacity: 0.3;
  z-index: -1;
`
const Heading=styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background: rgba( 255, 255, 255, 0.5 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  box-shadow: 0px 5px 15px rgba(184, 184, 184, 0.1);

  .heading-div {
    margin-left: 20px;
    flex: 1;
    p {
      margin: 0;
      font-size: 2rem;
      font-weight: 500;
      color: #0D004D;
      opacity: 0.8;
    }
  }

  .logo-div {
    margin-right: 20px;
    width: 80px;
    height: 48px;
    display: flex;
    justify-content: end;
    align-items: center;
    img {
      width: 37px;
      height: 37px;
      opacity: 0.8;
    }
  }

`

const MainForm=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`

const Name=styled.div`
  margin-top: 20px;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;

  .name-div {
    height: 35px;

    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
      color: #0D004D;
      opacity: 0.8;
    }
  }

  .name-input {
    flex: 1;
    display: flex;

    input {
      margin-top: 2px;
      height: 40px;
      width: 100%;
      border: 2px solid white;
      border-radius: 2px;
      padding-left: 12px;
      background: rgba( 255, 255, 255, 0.6 );
      backdrop-filter: blur( 4px );
      -webkit-backdrop-filter: blur( 4px );
      font-size: 17px;
      color: #0D004D;
      opacity: 0.8;
    }
  }
`

const PriceRoyalty=styled.div`
  margin-top: 10px;
  height: 100px;

  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  gap: 20px;

  .left-div,
  .right-div {
    flex: 1;
    height: 100%;

    display: flex;
    flex-direction: column;

    .price-div {
      width: 100%;
      height: 35px;

      display: flex;
      align-items: center;
      margin-bottom: 2px;

      p {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        color: #0D004D;
        opacity: 0.8;
      }
    }

    .price-container {
      flex: 1;
      display: flex;


      .logo-div {
        width: 40px;
        height: 42px;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba( 255, 255, 255,0.9);

        img {
          width: 28px;
          height: 28px;
          opacity: 0.8;
        }
      }

      .price-input {
        flex: 1;
        height: 100%;

        display: flex;
        align-items: start;

        input {
          height: 40px;
          width: 100%;
          border-right: 2px solid white;
          border-left: 2px solid white;
          border-top: 2px solid white;
          border-bottom: 2px solid white;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          padding-left: 12px;
          background: rgba( 255, 255, 255, 0.6 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          font-size: 17px;
          color: #0D004D;
          opacity: 0.8;
        }

      }
    }
  }

  .right-div {
    .royalty-div {
      width: 100%;
      height: 35px;

      display: flex;
      align-items: center;
      margin-bottom: 2px;

      p {
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        color: #0D004D;
        opacity: 0.8;
      }
    }

    .royalty-container {
      flex: 1;
      display: flex;


      .pct-div {
        width: 40px;
        height: 42px;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba( 255, 255, 255,0.9);

        img {
          width: 28px;
          height: 28px;
          opacity: 0.8;
        }
      }

      .royalty-input {
        flex: 1;
        height: 100%;

        display: flex;
        align-items: start;

        input {
          height: 40px;
          width: 100%;
          border-right: 2px solid white;
          border-left: 2px solid white;
          border-top: 2px solid white;
          border-bottom: 2px solid white;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          padding-left: 12px;
          background: rgba( 255, 255, 255, 0.6 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          font-size: 17px;
          color: #0D004D;
          opacity: 0.8;
        }

      }
    }
  }
`

const ChooseFile=styled.div`
  margin-top: 25px;
  flex: 1;
  margin-left: 30px;
  margin-right: 30px;
  background: rgba( 255, 255, 255, 0.3 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='2' ry='2' stroke='white' stroke-width='4' stroke-dasharray='9' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .top {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: end;

    .uploadContent {
      width: 240px;
      height: 35px;
      border-radius: 2px;
      color: #0D004D;
      opacity: 0.8;
      font-size: 15px;
      border: 1px solid white;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .uploadContent::-webkit-file-upload-button {
      width: 100px;
      height: 38px;
      background: rgba( 255, 255, 255, 0.8 );
      backdrop-filter: blur( 4px );
      -webkit-backdrop-filter: blur( 4px );
      border: 1px solid white;
      border-radius: 2px;
      cursor: pointer;
      margin-right: 10px;

      color: #0D004D;
      opacity: 0.9;
      transition: background 0.15s;
      font-size: 16px;

      &:hover {
        background: rgba( 255, 255, 255, 0.6 );
      }

      &:active {
        background: rgba( 255, 255, 255, 0.4);
      }
    }
  }

  .bottom {
    flex: 0.75;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`
const Gap=styled.div`
  height: 130px;

  margin-left: 30px;
  margin-right: 30px;
`
const Mint=styled.div`
  height: 65px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 35px;
  display: flex;
  align-items: end;

  .mint-button {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.8);
    background-image: linear-gradient( 68.2deg,  rgba(255,202,88,0.7) 0%, rgba(139,73,255,0.8) 100.2% );
    cursor: pointer;
    border-radius: 2px;
    transition: opacity 0.15s;

    p {
      margin: 0;
      margin-top: -1px;
      color: #0D004D;
      opacity: 0.9;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }
  }
`
