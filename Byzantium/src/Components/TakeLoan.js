import {React, useEffect, useState} from 'react'
import styled from 'styled-components'


function TakeLoan(props) {

  const L1Nfts = props.nfts;
  console.log('ass : ', L1Nfts);

  const [enteredId, setEnteredId] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const [particularNft, setParticularNft] = useState({
    name: "",
    imageUrl: "",
    price: "",
    usdValue: "",
    tokenID: ""
  })

  useEffect(()=>{
    setParticularNft(L1Nfts.filter((props) => props.tokenID == enteredId))
  },[]);

  console.log('my desire nft is : ',particularNft )

  const checkHandle = () => {
    setIsClicked(true);
    let inputValue = document.getElementById('inId')
    setEnteredId(inputValue.value);
    console.log(enteredId);
  }

  return (
    <Container>
      <div className='title'>
        <div className='acccount'>
          <div className='image'>
            <img src="/images/take-loan.png" />
          </div>
          <p>Loan</p>
        </div>
      </div>
      <MainSection>
        <div className='main-container'>
          <div className='input-tokenId'>
            <input type="text" placeholder='Token Id' id="inId" />
            <div className='ok-button' onClick={checkHandle}>
                <img src="/images/check.png"/>
            </div>
          </div>
          <div className='info-div'>
            <div className='up'>
              <div className='left'>
                <div className='image-container'>
                  <div className='image'>
                    <img src="/images/3.png" alt="NFT Image" />
                  </div>
                  <div className='name'>
                    <p>Name of the NFT</p>
                  </div>
                </div>

              </div>
              <div className='right'>
                <div className='row'>
                    <div className='title'>
                      <p>
                        NFT Worth :
                      </p>
                    </div>
                    <div className='value'>
                      <p>

                      </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='title'>
                      <p>
                        USD Value :
                      </p>
                    </div>
                    <div className='value'>
                      <p>

                      </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='title'>
                      <p>
                        LTV Ratio : 
                      </p>
                    </div>
                    <div className='value'>
                      <p>
                        45 %
                      </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='title'>
                      <p>
                        Loan Amount : 
                      </p>
                    </div>
                    <div className='value'>
                      <p>

                      </p>
                    </div>
                </div>
               
                <div className='row'>
                    <div className='title'>
                      <p>
                        Loan Period : 
                      </p>
                    </div>
                    <div className='value'>
                      <p>
                        60 Days
                      </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='title'>
                      <p>Final Amount : </p>
                    </div>
                    <div className='value'>
                      <p>

                      </p>
                    </div>
                </div>
              </div>
            </div>
            <div className='down'>
              <div className='button'>
                <p>Take Loan</p>  
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </Container>
  )
}

export default TakeLoan

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
            width: 4.7rem;
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
                    margin-left: -2px;
                    width: 60%;
                }
            }

            p {
          
               color: white;
            }
        }
    }
`

const MainSection = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  .main-container {
    width: 35rem;
    height: 23rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 30px;

    .input-tokenId {
      width: 100%;
      height: 2.3rem;
      display: flex;


      input {
        width: 90%;
        height: 100%;
        border: 1px solid rgba(130, 71, 230, 0.4);
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding-left: 10px;
        font-size: 16px;
        color: rgba(92, 12, 231, 0.806);
        font-weight: 500;
      }

      .ok-button {
        height: 2.45rem;
        width: 10%;
        border: 1px solid rgba(130, 71, 230, 0.4);
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(92, 12, 231, 0.806);
        transition: opacity 0.15s;

        img {
          width: 50%;
          opacity: 0.9;
        }

        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.8;
        }
      }
    }

    .info-div {
      width: 100%;
      flex:1;
      border: 1px solid rgba(130, 71, 230, 0.4);
      border-radius: 3px;
      display: flex;
      flex-direction: column;

      .up {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .left {
          width: 13rem;
          height: 100%;
          border-right: 1px solid rgba(130, 71, 230, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;

          .image-container {
            border: 1px solid rgba(130, 71, 230, 0.4);
            display: flex;
            flex-direction: column;
            width: 9rem;
            height: 11rem;

            .image {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(129, 71, 230, 0.267);
              

              img {
                width: 100%;
                object-fit: cover;
              }
            }

            .name {
              height: 2rem;
              border-top: 1px solid rgba(130, 71, 230, 0.4);
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: rgba(92, 12, 231, 0.806);;
              p {
                margin: 0;
                font-size: 12px;
                color: white
              }
            }


          }

          

        }

        .right {
          height: 100%;
          flex:1;
          display: flex;
          flex-direction: column;
  
          .row {
            flex:1;
            display: flex;
            border-bottom: 1px solid rgba(130, 71, 230, 0.4)  ;

            .title {
              width: 6rem;
              height: 100%;
              border-right:1px solid rgba(130, 71, 230, 0.4) ;
              background-color: rgba(129, 71, 230, 0.267);

              display: flex;
    

              p {
                margin: 0;
                margin-left: -10px;
                font-size: 13px;
                color: rgba(92, 12, 231, 0.806);
                font-weight: 500;
              }
            }

            .value {
              flex: 1;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              p {
                margin: 0;
                margin-left: 10px;
                font-size: 13px;
                color: rgba(92, 12, 231, 0.806);
                font-weight: 500;
              }
            }
          }

        }
      }

      .down {
        height: 4.5rem;
        width: 100%;
        border-top: 1px solid rgba(130, 71, 230, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;

        .button {
          width: 92%;
          height: 2.4rem;
          background-color: rgba(92, 12, 231, 0.806);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          cursor: pointer;
          p {
                margin: 0;
                font-size: 14px;
                color: white
          }   
        }
      }
    }

  }
`