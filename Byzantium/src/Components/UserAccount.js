import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/miniavs';
import { useSelector } from 'react-redux';
import { selectAccount } from '../features/AccountDetailSlice';
import { Network, Alchemy } from "alchemy-sdk";
import NFTCard from './NFTCard';
import web3modal from "web3modal"
import { ethers } from "ethers"
import { contractAbi, contractAddress } from "../MetropolisConfig";
import axios from "axios";
import { UserFactory } from 'nightfall-sdk';


const clientApiUrl = "http://localhost:3000/";

function UserAccount() {

    console.log('UserAccount : ', UserFactory);

    const getAccountDetail = useSelector(selectAccount);
    const [userBalances, setUserBalances] = useState({});

    // const createUserFirstTime = async () => {
    //     const nightfallUser = await UserFactory.create({
    //         clientApiUrl,
    //     });
    //     console.log(nightfallUser);
    // }

    // createUserFirstTime();

    // console.log('userFactory : ', UserFactory);
    /*---------------------------Fetches user purchased NFTs-----------------------------*/
    const [myNFts, setMyNfts] = useState([]);

    useEffect(() => {
        fetchMyPurchase();
    }, []);

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
    /*----------------------------------------------------------------------------------*/

    /*--------------Set NFTs to Cards--------------*/

    const L1Cards = myNFts.map(card => {
        return (
            <NFTCard
                id={card.tokenId}
                image={card.image}
            />
        )
    })

    /*---------------------------------------------*/

    let userAvatar = createAvatar(style, {
        dataUri: true,
        seed: `MB${getAccountDetail.address}`,
    });




    /*------------------Alchemy Setting-------------*/
    const alchemyId = process.env.REACT_APP_ALCHEMY_API_KEY;

    const alchemySettings = {
        apiKey: `${alchemyId}`,
        network: Network.ETH_GOERLI,
    }

    const alchemy = new Alchemy(alchemySettings);

    /*----------------------------------------------*/

    /*------Function to convert hex into decimal------*/
    const hexToDecimal = (hex) => parseInt(hex, 16);
    /*------------------------------------------------*/


    /*-----------get token balances------------*/


    const getbalances = async () => {

        let bal = {
            eth: "",
            usdc: "",
            matic: ""
        }

        await alchemy.core.getBalance(getAccountDetail.address)
            .then(response => {
                bal.eth = `${(hexToDecimal(response._hex) / 10 ** 18).toFixed(3)}`
            });

        // usdc // matic
        await alchemy.core.getTokenBalances(getAccountDetail.address, ["0x07865c6e87b9f70255377e024ace6630c1eaa37f", "0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae"])
            .then(response => {
                bal.usdc = `${(hexToDecimal(response.tokenBalances[0].tokenBalance) / 10 ** 6).toFixed(3)}`;
                bal.matic = `${(hexToDecimal(response.tokenBalances[1].tokenBalance) / 10 ** 18).toFixed(3)}`;
            })

        setUserBalances(bal);
    }

    useEffect(() => {
        getbalances();
    }, [getAccountDetail.status]);
    /*------------------------------------------*/


    return (
        <Container>
            <div className='title'>
                <div className='acccount'>
                    <div className='image'>
                        <img src="/images/user.png" />
                    </div>
                    <p>Account</p>
                </div>
            </div>
            <AccountDetail>
                <div className='up'>
                    <div className='up-left'>
                        <div className='avatar'>
                            <img src={userAvatar} />
                        </div>
                    </div>
                    <div className='up-right'>
                        <div className='address-container'>
                            <div className='user-adrresses'>
                                <div className='type'>
                                    Wallet Address
                                </div>
                                <div className='text'>
                                    <p>{getAccountDetail.address}</p>
                                </div>
                            </div>
                            <div className='user-adrresses'>
                                <div className='type'>
                                    NightFall Address
                                </div>
                                <div className='text'>
                                    <p>{getAccountDetail.address}</p>
                                </div>
                            </div>
                            <div className='user-adrresses'>
                                <div className='type'>
                                    UNS Domain
                                </div>
                                <div className='text'>
                                    {(getAccountDetail.unsDomain).length == 0 &&
                                        <p>N/A</p>
                                    }
                                    <p>{getAccountDetail.unsDomain}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='down'>
                    <div className='down-left'>
                        <div className='heading'>
                            L1 Balance
                        </div>
                        <div className='balances'>
                            <div className='erc20'>
                                <div className='erc-heading'>
                                    ERC 20
                                </div>
                                <div className='eth'>
                                    <div className='logo'>
                                        <img src="/images/ethereum-1.svg" />
                                    </div>
                                    <div className='amount'>
                                        {userBalances.eth}
                                    </div>
                                </div>
                                <div className='matic'>
                                    <div className='logo'>
                                        <img src="/images/polygon-purple.png" />
                                    </div>
                                    <div className='amount'>
                                        {userBalances.matic}
                                    </div>
                                </div>
                                <div className='usdc'>
                                    <div className='logo'>
                                        <img src="/images/usdc-logo.svg" />
                                    </div>
                                    <div className='amount'>
                                        {userBalances.usdc}
                                    </div>
                                </div>
                            </div>
                            <div className='erc721'>
                                <div className='erc-heading'>
                                    ERC 721
                                </div>
                                <div className='nfts-container'>
                                    {L1Cards}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='down-right'>
                        <div className='heading'>
                            L2 Balance
                        </div>
                        <div className='balances'>
                            <div className='erc20'>
                                <div className='erc-heading'>
                                    ERC 20
                                </div>
                                <div className='eth'>
                                    <div className='logo'>
                                        <img src="/images/ethereum-1.svg" />
                                    </div>
                                    <div className='amount'>
                                        78
                                    </div>
                                </div>
                                <div className='matic'>
                                    <div className='logo'>
                                        <img src="/images/polygon-purple.png" />
                                    </div>
                                    <div className='amount'>
                                        1190
                                    </div>
                                </div>
                                <div className='usdc'>
                                    <div className='logo'>
                                        <img src="/images/usdc-logo.svg" />
                                    </div>
                                    <div className='amount'>
                                        7897
                                    </div>
                                </div>
                            </div>
                            <div className='erc721'>
                                <div className='erc-heading'>
                                    ERC 721
                                </div>
                                <div className='nfts-container'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AccountDetail>
        </Container>
    )
}

export default UserAccount

const Container = styled.div`

    width: 100%;
  
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
            width: 6.7rem;
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
                    margin-left: -10px;
                    width: 50%;
                }
            }

            p {
          
               color: white;
            }
        }
    }
    
`

const AccountDetail = styled.div`
    flex:1;

    padding-left: 26px;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .up {
        height: 193px;
        display: flex;
        border: 1px solid rgba(130, 71, 230, 0.4);
        border-radius: 3px;

        .up-left {
            width: 13rem;
            border-right: 1px solid rgba(130, 71, 230, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            .avatar {
                width: 9rem;
                height: 9rem;
                border: 1px solid rgba(130, 71, 230, 0.4);
                background-color: rgba(129, 71, 230, 0.267);
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                img {
                    padding-top: 10px;
                    width: 95%;
                }
            }
        }

        .up-right {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            .address-container {
                height: 9rem;
                width: 95%;
          
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 1rem;
                align-items: center;

                .user-adrresses {
                    flex: 1;
                    width: 100%;
                    border: 1px solid rgba(130, 71, 230, 0.4);
                    display: flex;

                    .type {
                        width: 8rem;
                        border-right: 1px solid rgba(130, 71, 230, 0.4);
                        background-color: rgba(129, 71, 230, 0.267);
                        padding-left: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: start;
                        font-size: 13px;
                        color: rgba(99, 24, 230, 0.806);
                    }

                    .text {
                        display: flex;
                        align-items: center;

                        p {
                            padding-left: 10px;
                            margin: 0;
                            font-size: 13px;
                            color: rgba(99, 24, 230, 0.806);
                        }
                    }
                }
            }

        }
    }

    .down {

        height: 205px;
        border-radius: 3px;
        display: flex;
        gap: 40px;

        .down-left {
            flex: 1;
            border: 1px solid rgba(130, 71, 230, 0.4);
            border-radius: 2px;
            display: flex;
            flex-direction: column;

            .heading {
                display: flex;
                background-color: rgba(129, 71, 230, 0.267);
                align-items: center;
                justify-content: center;
                height: 2.6rem;
                border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                color: rgba(92, 12, 231, 0.806);
                font-weight: 500;
            }

            .balances {
                flex: 1;
           
                display: flex;
            
                .erc20 {
                    flex: 0.7;
                    border-right: 1px solid rgba(130, 71, 230, 0.4);
                    display: flex;
                    flex-direction: column;

                    .erc-heading {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                        background-color: rgba(129, 71, 230, 0.267);
                        color: rgba(92, 12, 231, 0.806);
                        font-weight: 500;
                    }

                    .eth {
                        flex: 1;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                        display: flex;
                        justify-content: center;
                        

                        .logo {
                            width: 3rem;
                            border-right: 1px solid rgba(130, 71, 230, 0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            object-fit: contain;

                            img {
                                width: 32%;
                            }
                        }

                        .amount {
                            flex: 1;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            padding-left: 10px;
                            color: rgba(92, 12, 231, 0.806);
                        }
                    }

                    .matic {
                        flex: 1;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);

                        display: flex;
                        justify-content: center;
                        

                        .logo {
                            width: 3rem;
                            border-right: 1px solid rgba(130, 71, 230, 0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            object-fit: contain;

                            img {
                                width: 50%;
                            }
                        }

                        .amount {
                            flex: 1;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            padding-left: 10px;
                            color: rgba(92, 12, 231, 0.806);
                        }
                    }

                    .usdc {
                        flex: 1;
                        border-bottom: -1px solid rgba(130, 71, 230, 0.4);
                        display: flex;
                        justify-content: center;
                        

                        .logo {
                            width: 3rem;
                            border-right: 1px solid rgba(130, 71, 230, 0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            object-fit: contain;

                            img {
                                width: 51%;
                            }
                        }

                        .amount {
                            flex: 1;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            padding-left: 10px;
                            color: rgba(92, 12, 231, 0.806);
                        }
                    }
                }

                .erc721 {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    .erc-heading {
                        flex: 0.33;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                        background-color: rgba(129, 71, 230, 0.267);
                        color: rgba(92, 12, 231, 0.806);
                        font-weight: 500;
                    }

                    .nfts-container {
                        flex:1;
                        display: grid;
                        grid-template-columns: 4rem 4rem 4rem 4rem 4rem; 
                        grid-column-gap: 5px;
                        grid-row-gap: 0px;
                       
                       
                        /* .grid-box {
                            display: flex;
                            justify-content: center;
                        } */
                    }
                }
            }
        }

        .down-right {
            flex: 1;
            border-radius: 2px;
            border: 1px solid rgba(130, 71, 230, 0.4);
            display: flex;
            flex-direction: column;

            .heading {
                background-color: rgba(129, 71, 230, 0.267);
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2.6rem;
                border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                color: rgba(92, 12, 231, 0.806);
                font-weight: 500;
            }

            .balances {
                flex: 1;
           
                display: flex;
            
                .erc20 {
                    flex: 0.7;
                    border-right: 1px solid rgba(130, 71, 230, 0.4);
                    display: flex;
                    flex-direction: column;

                    .erc-heading {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                        background-color: rgba(129, 71, 230, 0.267);
                        color: rgba(92, 12, 231, 0.806);
                        font-weight: 500;
                    }

                    .eth {
                        flex: 1;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                        display: flex;
                        justify-content: center;
                        

                        .logo {
                            width: 3rem;
                            border-right: 1px solid rgba(130, 71, 230, 0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            object-fit: contain;

                            img {
                                width: 32%;
                            }
                        }

                        .amount {
                            flex: 1;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            padding-left: 10px;
                            color: rgba(92, 12, 231, 0.806);
                        }
                    }

                    .matic {
                        flex: 1;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);

                        display: flex;
                        justify-content: center;
                        

                        .logo {
                            width: 3rem;
                            border-right: 1px solid rgba(130, 71, 230, 0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            object-fit: contain;

                            img {
                                width: 50%;
                            }
                        }

                        .amount {
                            flex: 1;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            padding-left: 10px;
                            color: rgba(92, 12, 231, 0.806);
                        }
                    }

                    .usdc {
                        flex: 1;
                        border-bottom: -1px solid rgba(130, 71, 230, 0.4);
                        display: flex;
                        justify-content: center;
                        

                        .logo {
                            width: 3rem;
                            border-right: 1px solid rgba(130, 71, 230, 0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            object-fit: contain;

                            img {
                                width: 51%;
                            }
                        }

                        .amount {
                            flex: 1;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            padding-left: 10px;
                            color: rgba(92, 12, 231, 0.806);
                        }
                    }
                }

                .erc721 {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    .erc-heading {
                        flex: 0.33;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 1px solid rgba(130, 71, 230, 0.4);
                        background-color: rgba(129, 71, 230, 0.267);
                        color: rgba(92, 12, 231, 0.806);
                        font-weight: 500;
                    }

                    .nfts-container {
                        flex:1;
                    }
                }
            }
        }
    }
`