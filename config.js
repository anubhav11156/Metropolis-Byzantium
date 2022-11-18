export const contractAddress = '0xc5ae844dAB26dE141ebba285BDf1a8F11Eb3975e'

export const contractAbi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "Metropolis",
  "sourceName": "contracts/metropolis.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "ChainlinkCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "ChainlinkFulfilled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "ChainlinkRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address payable",
          "name": "artist",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "royaltyFeeInBips",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "sold",
          "type": "bool"
        }
      ],
      "name": "nftCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyNft",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "royaltyFeeInBips",
          "type": "uint256"
        }
      ],
      "name": "createToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fetchMarket",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "seller",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "artist",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "royaltyFeeInBips",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "sold",
              "type": "bool"
            }
          ],
          "internalType": "struct Metropolis.NFT[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fetchMyListings",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "seller",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "artist",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "royaltyFeeInBips",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "sold",
              "type": "bool"
            }
          ],
          "internalType": "struct Metropolis.NFT[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fetchMyNFTs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "seller",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "artist",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "royaltyFeeInBips",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "sold",
              "type": "bool"
            }
          ],
          "internalType": "struct Metropolis.NFT[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_requestId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "data",
          "type": "uint256"
        }
      ],
      "name": "fulfill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_salePrice",
          "type": "uint256"
        }
      ],
      "name": "getCommissionFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLINKtokenBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMATICvalue",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_salePrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "royaltyFeeInBips",
          "type": "uint256"
        }
      ],
      "name": "getRoyaltyFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maticUSDvalue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "resellNFTs",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526001600b553480156200001657600080fd5b506040518060400160405280600e81526020017f4d6574726f706f6c6973204e46540000000000000000000000000000000000008152506040518060400160405280600581526020017f4d4554524f000000000000000000000000000000000000000000000000000000815250816000908162000094919062000472565b508060019081620000a6919062000472565b50505033600e60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200010f73326c977e6efc84e512bb9c30f76e30c160ed06fb6200017060201b60201c565b620001347340193c8518bb267228fc409a613bdbd8ec5a97b3620001b460201b60201c565b7f636139383336366363373331343935376238633031326337326630356165656260118190555067016345785d8a000060128190555062000559565b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200027a57607f821691505b60208210810362000290576200028f62000232565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002bb565b620003068683620002bb565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003536200034d62000347846200031e565b62000328565b6200031e565b9050919050565b6000819050919050565b6200036f8362000332565b620003876200037e826200035a565b848454620002c8565b825550505050565b600090565b6200039e6200038f565b620003ab81848462000364565b505050565b5b81811015620003d357620003c760008262000394565b600181019050620003b1565b5050565b601f8211156200042257620003ec8162000296565b620003f784620002ab565b8101602085101562000407578190505b6200041f6200041685620002ab565b830182620003b0565b50505b505050565b600082821c905092915050565b6000620004476000198460080262000427565b1980831691505092915050565b600062000462838362000434565b9150826002028217905092915050565b6200047d82620001f8565b67ffffffffffffffff81111562000499576200049862000203565b5b620004a5825462000261565b620004b2828285620003d7565b600060209050601f831160018114620004ea5760008415620004d5578287015190505b620004e1858262000454565b86555062000551565b601f198416620004fa8662000296565b60005b828110156200052457848901518255600182019150602085019450602081019050620004fd565b8683101562000544578489015162000540601f89168262000434565b8355505b6001600288020188555050505b505050505050565b615bb580620005696000396000f3fe6080604052600436106101665760003560e01c80636b0f8b04116100d1578063a0dd94dc1161008a578063b88d4fde11610064578063b88d4fde14610529578063bec2a7c514610552578063c87b56dd14610582578063e985e9c5146105bf57610166565b8063a0dd94dc14610498578063a22cb465146104c3578063b6342bb4146104ec57610166565b80636b0f8b041461038e5780636b159766146103aa57806370a08231146103d557806377e587031461041257806386d6fdb51461044f57806395d89b411461046d57610166565b806323b872dd1161012357806323b872dd1461028f578063243adbdd146102b85780633143ec87146102d457806342842e0e146102ff5780634357855e146103285780636352211e1461035157610166565b806301ffc9a71461016b57806306fdde03146101a8578063081812fc146101d3578063095ea7b31461021057806315a70d8d14610239578063202e374014610264575b600080fd5b34801561017757600080fd5b50610192600480360381019061018d9190613e02565b6105fc565b60405161019f9190613e4a565b60405180910390f35b3480156101b457600080fd5b506101bd6106de565b6040516101ca9190613ef5565b60405180910390f35b3480156101df57600080fd5b506101fa60048036038101906101f59190613f4d565b610770565b6040516102079190613fbb565b60405180910390f35b34801561021c57600080fd5b5061023760048036038101906102329190614002565b6107b6565b005b34801561024557600080fd5b5061024e6108cd565b60405161025b91906141d3565b60405180910390f35b34801561027057600080fd5b50610279610c22565b60405161028691906141d3565b60405180910390f35b34801561029b57600080fd5b506102b660048036038101906102b191906141f5565b610f77565b005b6102d260048036038101906102cd9190613f4d565b610fd7565b005b3480156102e057600080fd5b506102e961145f565b6040516102f691906141d3565b60405180910390f35b34801561030b57600080fd5b50610326600480360381019061032191906141f5565b611731565b005b34801561033457600080fd5b5061034f600480360381019061034a919061427e565b611751565b005b34801561035d57600080fd5b5061037860048036038101906103739190613f4d565b611862565b6040516103859190613fbb565b60405180910390f35b6103a860048036038101906103a391906142be565b6118e8565b005b3480156103b657600080fd5b506103bf611a99565b6040516103cc919061430d565b60405180910390f35b3480156103e157600080fd5b506103fc60048036038101906103f79190614328565b611aa1565b604051610409919061430d565b60405180910390f35b34801561041e57600080fd5b50610439600480360381019061043491906142be565b611b58565b604051610446919061430d565b60405180910390f35b610457611bc5565b6040516104649190614364565b60405180910390f35b34801561047957600080fd5b50610482611d29565b60405161048f9190613ef5565b60405180910390f35b3480156104a457600080fd5b506104ad611dbb565b6040516104ba919061430d565b60405180910390f35b3480156104cf57600080fd5b506104ea60048036038101906104e591906143ab565b611dc1565b005b3480156104f857600080fd5b50610513600480360381019061050e9190613f4d565b611dd7565b604051610520919061430d565b60405180910390f35b34801561053557600080fd5b50610550600480360381019061054b9190614520565b611e45565b005b61056c60048036038101906105679190614644565b611ea7565b604051610579919061430d565b60405180910390f35b34801561058e57600080fd5b506105a960048036038101906105a49190613f4d565b611eee565b6040516105b69190613ef5565b60405180910390f35b3480156105cb57600080fd5b506105e660048036038101906105e191906146b3565b612000565b6040516105f39190613e4a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806106c757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806106d757506106d682612094565b5b9050919050565b6060600080546106ed90614722565b80601f016020809104026020016040519081016040528092919081815260200182805461071990614722565b80156107665780601f1061073b57610100808354040283529160200191610766565b820191906000526020600020905b81548152906001019060200180831161074957829003601f168201915b5050505050905090565b600061077b826120fe565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107c182611862565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610831576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610828906147c5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610850612149565b73ffffffffffffffffffffffffffffffffffffffff16148061087f575061087e81610879612149565b612000565b5b6108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b590614857565b60405180910390fd5b6108c88383612151565b505050565b606060006108db600f61220a565b905060008060005b83811015610982573373ffffffffffffffffffffffffffffffffffffffff16600d600060018461091391906148a6565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361096f57828061096b906148da565b9350505b808061097a906148da565b9150506108e3565b5060008267ffffffffffffffff81111561099f5761099e6143f5565b5b6040519080825280602002602001820160405280156109d857816020015b6109c5613c86565b8152602001906001900390816109bd5790505b50905060005b84811015610c17573373ffffffffffffffffffffffffffffffffffffffff16600d6000600184610a0e91906148a6565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610c04576000600182610a6a91906148a6565b90506000600d600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050848681518110610be857610be7614922565b5b60200260200101819052508480610bfe906148da565b95505050505b8080610c0f906148da565b9150506109de565b508094505050505090565b60606000610c30600f61220a565b905060008060005b83811015610cd7573373ffffffffffffffffffffffffffffffffffffffff16600d6000600184610c6891906148a6565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610cc4578280610cc0906148da565b9350505b8080610ccf906148da565b915050610c38565b5060008267ffffffffffffffff811115610cf457610cf36143f5565b5b604051908082528060200260200182016040528015610d2d57816020015b610d1a613c86565b815260200190600190039081610d125790505b50905060005b84811015610f6c573373ffffffffffffffffffffffffffffffffffffffff16600d6000600184610d6391906148a6565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610f59576000600182610dbf91906148a6565b90506000600d600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050848681518110610f3d57610f3c614922565b5b60200260200101819052508480610f53906148da565b95505050505b8080610f64906148da565b915050610d33565b508094505050505090565b610f88610f82612149565b82612218565b610fc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbe906149c3565b60405180910390fd5b610fd28383836122ad565b505050565b6000600d60008381526020019081526020016000206004015490506000600d60008481526020019081526020016000206005015490506000600d600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600d600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508334146110c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110bc90614a55565b60405180910390fd5b33600d600087815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600d600087815260200190815260200160002060070160006101000a81548160ff0219169083151502179055506000600d600087815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111a960106125a6565b6111b43033876122ad565b600d600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600d600087815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361132757600061125e85611dd7565b90506000813461126e9190614a75565b9050600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156112d8573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561131f573d6000803e3d6000fd5b505050611458565b600061133285611dd7565b905060006113408686611b58565b90506000818361135091906148a6565b3461135b9190614a75565b90508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156113a3573d6000803e3d6000fd5b50600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015801561140c573d6000803e3d6000fd5b508473ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611453573d6000803e3d6000fd5b505050505b5050505050565b6060600061146d600f61220a565b9050600061147b601061220a565b611485600f61220a565b61148f9190614a75565b90506000808267ffffffffffffffff8111156114ae576114ad6143f5565b5b6040519080825280602002602001820160405280156114e757816020015b6114d4613c86565b8152602001906001900390816114cc5790505b50905060005b84811015611726573073ffffffffffffffffffffffffffffffffffffffff16600d600060018461151d91906148a6565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361171357600060018261157991906148a6565b90506000600d600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250508486815181106116f7576116f6614922565b5b6020026020010181905250848061170d906148da565b95505050505b808061171e906148da565b9150506114ed565b508094505050505090565b61174c83838360405180602001604052806000815250611e45565b505050565b81600c600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ea90614b1b565b60405180910390fd5b600c600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281601381905550505050565b60008061186e836125bc565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d690614b87565b60405180910390fd5b80915050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600d600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461198c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198390614bf3565b60405180910390fd5b30600d600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600d600084815260200190815260200160002060070160006101000a81548160ff02191690831515021790555033600d600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d600084815260200190815260200160002060040181905550611a8a60106125f9565b611a953330846122ad565b5050565b600047905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0890614c85565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600067016345785d8a00008311611ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9b90614d17565b60405180910390fd5b8161271084611bb39190614d66565b611bbd9190614d97565b905092915050565b600080611bdc60115430634357855e60e01b612655565b9050611c406040518060400160405280600381526020017f67657400000000000000000000000000000000000000000000000000000000008152506040518060c0016040528060948152602001615aec60949139836126869092919063ffffffff16565b611cbf6040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5553440000000000000000000000000000000000000000000000000000000000815250836126869092919063ffffffff16565b6000670de0b6b3a76400009050611d166040518060400160405280600581526020017f74696d657300000000000000000000000000000000000000000000000000000081525082846126b99092919063ffffffff16565b611d22826012546126ec565b9250505090565b606060018054611d3890614722565b80601f0160208091040260200160405190810160405280929190818152602001828054611d6490614722565b8015611db15780601f10611d8657610100808354040283529160200191611db1565b820191906000526020600020905b815481529060010190602001808311611d9457829003601f168201915b5050505050905090565b60135481565b611dd3611dcc612149565b8383612723565b5050565b600067016345785d8a00008211611e23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1a90614d17565b60405180910390fd5b61012c61271083611e349190614d66565b611e3e9190614d97565b9050919050565b611e56611e50612149565b83612218565b611e95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e8c906149c3565b60405180910390fd5b611ea18484848461288f565b50505050565b6000611eb3600f6125a6565b6000611ebf600f61220a565b9050611ecb33826128eb565b611ed58186612b08565b611ee3818585601354612b75565b809150509392505050565b6060611ef9826120fe565b6000600660008481526020019081526020016000208054611f1990614722565b80601f0160208091040260200160405190810160405280929190818152602001828054611f4590614722565b8015611f925780601f10611f6757610100808354040283529160200191611f92565b820191906000526020600020905b815481529060010190602001808311611f7557829003601f168201915b505050505090506000611fa3612d9e565b90506000815103611fb8578192505050611ffb565b600082511115611fed578082604051602001611fd5929190614e15565b60405160208183030381529060405292505050611ffb565b611ff684612db5565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61210781612e1d565b612146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213d90614b87565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166121c483611862565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b60008061222483611862565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061226657506122658185612000565b5b806122a457508373ffffffffffffffffffffffffffffffffffffffff1661228c84610770565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166122cd82611862565b73ffffffffffffffffffffffffffffffffffffffff1614612323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231a90614eab565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612392576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161238990614f3d565b60405180910390fd5b61239f8383836001612e5e565b8273ffffffffffffffffffffffffffffffffffffffff166123bf82611862565b73ffffffffffffffffffffffffffffffffffffffff1614612415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161240c90614eab565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46125a18383836001612f84565b505050565b6001816000016000828254019250508190555050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008160000154905060008111612645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161263c90614fa9565b60405180910390fd5b6001810382600001819055505050565b61265d613d0f565b612665613d0f565b61267c85858584612f8a909392919063ffffffff16565b9150509392505050565b61269d82846080015161303a90919063ffffffff16565b6126b481846080015161303a90919063ffffffff16565b505050565b6126d082846080015161303a90919063ffffffff16565b6126e781846080015161305f90919063ffffffff16565b505050565b600061271b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848461310c565b905092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161278890615015565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516128829190613e4a565b60405180910390a3505050565b61289a8484846122ad565b6128a6848484846131d8565b6128e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128dc906150a7565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361295a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161295190615113565b60405180910390fd5b61296381612e1d565b156129a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161299a9061517f565b60405180910390fd5b6129b1600083836001612e5e565b6129ba81612e1d565b156129fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129f19061517f565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612b04600083836001612f84565b5050565b612b1182612e1d565b612b50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b4790615211565b60405180910390fd5b80600660008481526020019081526020016000209081612b7091906153dd565b505050565b60008311612bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612baf906154fb565b60405180910390fd5b612bc0611bc5565b5083600d60008681526020019081526020016000206000018190555082600d60008681526020019081526020016000206004018190555081600d600086815260200190815260200160002060050181905550670de0b6b3a76400008184612c279190614d97565b612c319190614d66565b600d60008681526020019081526020016000206006018190555033600d600086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600d600086815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600d600086815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612d553330866122ad565b837f57bc5db4260382b0aa84042772478b244fd59a2fa4988fcc77e2d7c0d09dec7033303387876000604051612d909695949392919061552a565b60405180910390a250505050565b606060405180602001604052806000815250905090565b6060612dc0826120fe565b6000612dca612d9e565b90506000815111612dea5760405180602001604052806000815250612e15565b80612df48461335f565b604051602001612e05929190614e15565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16612e3f836125bc565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6001811115612f7e57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612ef25780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612eea9190614a75565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612f7d5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612f7591906148a6565b925050819055505b5b50505050565b50505050565b612f92613d0f565b612fa2856080015161010061342d565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6130478260038351613497565b61305a818361361c90919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000081121561309657613091828261363e565b613108565b67ffffffffffffffff8113156130b5576130b082826136b5565b613107565b600081126130ce576130c982600083613497565b613106565b613105826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6131009190615595565b613497565b5b5b5b5050565b600080600b54905060018161312191906148a6565b600b819055506000634042994660e01b60008087600001513089604001518760018c608001516000015160405160240161316298979695949392919061563c565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506131cd86838684613701565b925050509392505050565b60006131f98473ffffffffffffffffffffffffffffffffffffffff16613896565b15613352578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02613222612149565b8786866040518563ffffffff1660e01b815260040161324494939291906156c1565b6020604051808303816000875af192505050801561328057506040513d601f19601f8201168201806040525081019061327d9190615722565b60015b613302573d80600081146132b0576040519150601f19603f3d011682016040523d82523d6000602084013e6132b5565b606091505b5060008151036132fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132f1906150a7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050613357565b600190505b949350505050565b60606000600161336e846138b9565b01905060008167ffffffffffffffff81111561338d5761338c6143f5565b5b6040519080825280601f01601f1916602001820160405280156133bf5781602001600182028036833780820191505090505b509050600082602001820190505b600115613422578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161341657613415614d37565b5b049450600085036133cd575b819350505050919050565b613435613d7c565b6000602083613444919061574f565b1461347057602082613456919061574f565b60206134629190614a75565b8261346d91906148a6565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff16116134ce576134c88160058460ff16901b60ff161784613a0c90919063ffffffff16565b50613617565b60ff8167ffffffffffffffff1611613524576134fd601860058460ff16901b1784613a0c90919063ffffffff16565b5061351e8167ffffffffffffffff16600185613a2c9092919063ffffffff16565b50613616565b61ffff8167ffffffffffffffff161161357b57613554601960058460ff16901b1784613a0c90919063ffffffff16565b506135758167ffffffffffffffff16600285613a2c9092919063ffffffff16565b50613615565b63ffffffff8167ffffffffffffffff16116135d4576135ad601a60058460ff16901b1784613a0c90919063ffffffff16565b506135ce8167ffffffffffffffff16600485613a2c9092919063ffffffff16565b50613614565b6135f1601b60058460ff16901b1784613a0c90919063ffffffff16565b506136128167ffffffffffffffff16600885613a2c9092919063ffffffff16565b505b5b5b5b505050565b613624613d7c565b61363683846000015151848551613a4e565b905092915050565b61365c60036005600660ff16901b1783613a0c90919063ffffffff16565b506136b182827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61368d9190615595565b60405160200161369d919061430d565b604051602081830303815290604052613b3d565b5050565b6136d360026005600660ff16901b1783613a0c90919063ffffffff16565b506136fd82826040516020016136e9919061430d565b604051602081830303815290604052613b3d565b5050565b6000308460405160200161371692919061582f565b60405160208183030381529060405280519060200120905084600c600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b815260040161380c9392919061585b565b6020604051808303816000875af115801561382b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061384f91906158ae565b61388e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016138859061594d565b60405180910390fd5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613917577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161390d5761390c614d37565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613954576d04ee2d6d415b85acef8100000000838161394a57613949614d37565b5b0492506020810190505b662386f26fc10000831061398357662386f26fc10000838161397957613978614d37565b5b0492506010810190505b6305f5e10083106139ac576305f5e10083816139a2576139a1614d37565b5b0492506008810190505b61271083106139d15761271083816139c7576139c6614d37565b5b0492506004810190505b606483106139f457606483816139ea576139e9614d37565b5b0492506002810190505b600a8310613a03576001810190505b80915050919050565b613a14613d7c565b613a248384600001515184613b62565b905092915050565b613a34613d7c565b613a45848560000151518585613bb8565b90509392505050565b613a56613d7c565b8251821115613a6457600080fd5b84602001518285613a7591906148a6565b1115613aaa57613aa9856002613a9a88602001518887613a9591906148a6565b613c46565b613aa49190614d97565b613c62565b5b600080865180518760208301019350808887011115613ac95787860182525b60208701925050505b60208410613b105780518252602082613aeb91906148a6565b9150602081613afa91906148a6565b9050602084613b099190614a75565b9350613ad2565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b613b4a8260028351613497565b613b5d818361361c90919063ffffffff16565b505050565b613b6a613d7c565b83602001518310613b9057613b8f8460028660200151613b8a9190614d97565b613c62565b5b83518051602085830101848153818603613bab576001820183525b5050508390509392505050565b613bc0613d7c565b84602001518483613bd191906148a6565b1115613bf957613bf88560028685613be991906148a6565b613bf39190614d97565b613c62565b5b6000600183610100613c0b9190615aa0565b613c159190614a75565b90508551838682010185831982511617815281518588011115613c385784870182525b505085915050949350505050565b600081831115613c5857829050613c5c565b8190505b92915050565b600082600001519050613c75838361342d565b50613c80838261361c565b50505050565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001613d76613d7c565b81525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613ddf81613daa565b8114613dea57600080fd5b50565b600081359050613dfc81613dd6565b92915050565b600060208284031215613e1857613e17613da0565b5b6000613e2684828501613ded565b91505092915050565b60008115159050919050565b613e4481613e2f565b82525050565b6000602082019050613e5f6000830184613e3b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613e9f578082015181840152602081019050613e84565b60008484015250505050565b6000601f19601f8301169050919050565b6000613ec782613e65565b613ed18185613e70565b9350613ee1818560208601613e81565b613eea81613eab565b840191505092915050565b60006020820190508181036000830152613f0f8184613ebc565b905092915050565b6000819050919050565b613f2a81613f17565b8114613f3557600080fd5b50565b600081359050613f4781613f21565b92915050565b600060208284031215613f6357613f62613da0565b5b6000613f7184828501613f38565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613fa582613f7a565b9050919050565b613fb581613f9a565b82525050565b6000602082019050613fd06000830184613fac565b92915050565b613fdf81613f9a565b8114613fea57600080fd5b50565b600081359050613ffc81613fd6565b92915050565b6000806040838503121561401957614018613da0565b5b600061402785828601613fed565b925050602061403885828601613f38565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61407781613f17565b82525050565b600061408882613f7a565b9050919050565b6140988161407d565b82525050565b6140a781613e2f565b82525050565b610100820160008201516140c4600085018261406e565b5060208201516140d7602085018261408f565b5060408201516140ea604085018261408f565b5060608201516140fd606085018261408f565b506080820151614110608085018261406e565b5060a082015161412360a085018261406e565b5060c082015161413660c085018261406e565b5060e082015161414960e085018261409e565b50505050565b600061415b83836140ad565b6101008301905092915050565b6000602082019050919050565b600061418082614042565b61418a818561404d565b93506141958361405e565b8060005b838110156141c65781516141ad888261414f565b97506141b883614168565b925050600181019050614199565b5085935050505092915050565b600060208201905081810360008301526141ed8184614175565b905092915050565b60008060006060848603121561420e5761420d613da0565b5b600061421c86828701613fed565b935050602061422d86828701613fed565b925050604061423e86828701613f38565b9150509250925092565b6000819050919050565b61425b81614248565b811461426657600080fd5b50565b60008135905061427881614252565b92915050565b6000806040838503121561429557614294613da0565b5b60006142a385828601614269565b92505060206142b485828601613f38565b9150509250929050565b600080604083850312156142d5576142d4613da0565b5b60006142e385828601613f38565b92505060206142f485828601613f38565b9150509250929050565b61430781613f17565b82525050565b600060208201905061432260008301846142fe565b92915050565b60006020828403121561433e5761433d613da0565b5b600061434c84828501613fed565b91505092915050565b61435e81614248565b82525050565b60006020820190506143796000830184614355565b92915050565b61438881613e2f565b811461439357600080fd5b50565b6000813590506143a58161437f565b92915050565b600080604083850312156143c2576143c1613da0565b5b60006143d085828601613fed565b92505060206143e185828601614396565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61442d82613eab565b810181811067ffffffffffffffff8211171561444c5761444b6143f5565b5b80604052505050565b600061445f613d96565b905061446b8282614424565b919050565b600067ffffffffffffffff82111561448b5761448a6143f5565b5b61449482613eab565b9050602081019050919050565b82818337600083830152505050565b60006144c36144be84614470565b614455565b9050828152602081018484840111156144df576144de6143f0565b5b6144ea8482856144a1565b509392505050565b600082601f830112614507576145066143eb565b5b81356145178482602086016144b0565b91505092915050565b6000806000806080858703121561453a57614539613da0565b5b600061454887828801613fed565b945050602061455987828801613fed565b935050604061456a87828801613f38565b925050606085013567ffffffffffffffff81111561458b5761458a613da5565b5b614597878288016144f2565b91505092959194509250565b600067ffffffffffffffff8211156145be576145bd6143f5565b5b6145c782613eab565b9050602081019050919050565b60006145e76145e2846145a3565b614455565b905082815260208101848484011115614603576146026143f0565b5b61460e8482856144a1565b509392505050565b600082601f83011261462b5761462a6143eb565b5b813561463b8482602086016145d4565b91505092915050565b60008060006060848603121561465d5761465c613da0565b5b600084013567ffffffffffffffff81111561467b5761467a613da5565b5b61468786828701614616565b935050602061469886828701613f38565b92505060406146a986828701613f38565b9150509250925092565b600080604083850312156146ca576146c9613da0565b5b60006146d885828601613fed565b92505060206146e985828601613fed565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061473a57607f821691505b60208210810361474d5761474c6146f3565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006147af602183613e70565b91506147ba82614753565b604082019050919050565b600060208201905081810360008301526147de816147a2565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000614841603d83613e70565b915061484c826147e5565b604082019050919050565b6000602082019050818103600083015261487081614834565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006148b182613f17565b91506148bc83613f17565b92508282019050808211156148d4576148d3614877565b5b92915050565b60006148e582613f17565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361491757614916614877565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006149ad602d83613e70565b91506149b882614951565b604082019050919050565b600060208201905081810360008301526149dc816149a0565b9050919050565b7f5375626d6974746564207072696365206e6f7420657175616c20746f204e465460008201527f2070726963652e00000000000000000000000000000000000000000000000000602082015250565b6000614a3f602783613e70565b9150614a4a826149e3565b604082019050919050565b60006020820190508181036000830152614a6e81614a32565b9050919050565b6000614a8082613f17565b9150614a8b83613f17565b9250828203905081811115614aa357614aa2614877565b5b92915050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000614b05602883613e70565b9150614b1082614aa9565b604082019050919050565b60006020820190508181036000830152614b3481614af8565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000614b71601883613e70565b9150614b7c82614b3b565b602082019050919050565b60006020820190508181036000830152614ba081614b64565b9050919050565b7f596f7520617265206e6f74206f776e6572206f662074686973204e4654000000600082015250565b6000614bdd601d83613e70565b9150614be882614ba7565b602082019050919050565b60006020820190508181036000830152614c0c81614bd0565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000614c6f602983613e70565b9150614c7a82614c13565b604082019050919050565b60006020820190508181036000830152614c9e81614c62565b9050919050565b7f53616c65207072696365206973206c657373207468616e20302e31204d41544960008201527f4300000000000000000000000000000000000000000000000000000000000000602082015250565b6000614d01602183613e70565b9150614d0c82614ca5565b604082019050919050565b60006020820190508181036000830152614d3081614cf4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614d7182613f17565b9150614d7c83613f17565b925082614d8c57614d8b614d37565b5b828204905092915050565b6000614da282613f17565b9150614dad83613f17565b9250828202614dbb81613f17565b91508282048414831517614dd257614dd1614877565b5b5092915050565b600081905092915050565b6000614def82613e65565b614df98185614dd9565b9350614e09818560208601613e81565b80840191505092915050565b6000614e218285614de4565b9150614e2d8284614de4565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000614e95602583613e70565b9150614ea082614e39565b604082019050919050565b60006020820190508181036000830152614ec481614e88565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614f27602483613e70565b9150614f3282614ecb565b604082019050919050565b60006020820190508181036000830152614f5681614f1a565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000614f93601b83613e70565b9150614f9e82614f5d565b602082019050919050565b60006020820190508181036000830152614fc281614f86565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614fff601983613e70565b915061500a82614fc9565b602082019050919050565b6000602082019050818103600083015261502e81614ff2565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000615091603283613e70565b915061509c82615035565b604082019050919050565b600060208201905081810360008301526150c081615084565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006150fd602083613e70565b9150615108826150c7565b602082019050919050565b6000602082019050818103600083015261512c816150f0565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615169601c83613e70565b915061517482615133565b602082019050919050565b600060208201905081810360008301526151988161515c565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006151fb602e83613e70565b91506152068261519f565b604082019050919050565b6000602082019050818103600083015261522a816151ee565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026152937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82615256565b61529d8683615256565b95508019841693508086168417925050509392505050565b6000819050919050565b60006152da6152d56152d084613f17565b6152b5565b613f17565b9050919050565b6000819050919050565b6152f4836152bf565b615308615300826152e1565b848454615263565b825550505050565b600090565b61531d615310565b6153288184846152eb565b505050565b5b8181101561534c57615341600082615315565b60018101905061532e565b5050565b601f8211156153915761536281615231565b61536b84615246565b8101602085101561537a578190505b61538e61538685615246565b83018261532d565b50505b505050565b600082821c905092915050565b60006153b460001984600802615396565b1980831691505092915050565b60006153cd83836153a3565b9150826002028217905092915050565b6153e682613e65565b67ffffffffffffffff8111156153ff576153fe6143f5565b5b6154098254614722565b615414828285615350565b600060209050601f8311600181146154475760008415615435578287015190505b61543f85826153c1565b8655506154a7565b601f19841661545586615231565b60005b8281101561547d57848901518255600182019150602085019450602081019050615458565b8683101561549a5784890151615496601f8916826153a3565b8355505b6001600288020188555050505b505050505050565b7f50726963652063616e2774206265207a65726f2e000000000000000000000000600082015250565b60006154e5601483613e70565b91506154f0826154af565b602082019050919050565b60006020820190508181036000830152615514816154d8565b9050919050565b6155248161407d565b82525050565b600060c08201905061553f600083018961551b565b61554c602083018861551b565b615559604083018761551b565b61556660608301866142fe565b61557360808301856142fe565b61558060a0830184613e3b565b979650505050505050565b6000819050919050565b60006155a08261558b565b91506155ab8361558b565b92508282039050818112600084121682821360008512151617156155d2576155d1614877565b5b92915050565b6155e181613daa565b82525050565b600081519050919050565b600082825260208201905092915050565b600061560e826155e7565b61561881856155f2565b9350615628818560208601613e81565b61563181613eab565b840191505092915050565b600061010082019050615652600083018b613fac565b61565f602083018a6142fe565b61566c6040830189614355565b6156796060830188613fac565b61568660808301876155d8565b61569360a08301866142fe565b6156a060c08301856142fe565b81810360e08301526156b28184615603565b90509998505050505050505050565b60006080820190506156d66000830187613fac565b6156e36020830186613fac565b6156f060408301856142fe565b81810360608301526157028184615603565b905095945050505050565b60008151905061571c81613dd6565b92915050565b60006020828403121561573857615737613da0565b5b60006157468482850161570d565b91505092915050565b600061575a82613f17565b915061576583613f17565b92508261577557615774614d37565b5b828206905092915050565b600061579b61579661579184613f7a565b6152b5565b613f7a565b9050919050565b60006157ad82615780565b9050919050565b60006157bf826157a2565b9050919050565b60008160601b9050919050565b60006157de826157c6565b9050919050565b60006157f0826157d3565b9050919050565b615808615803826157b4565b6157e5565b82525050565b6000819050919050565b61582961582482613f17565b61580e565b82525050565b600061583b82856157f7565b60148201915061584b8284615818565b6020820191508190509392505050565b60006060820190506158706000830186613fac565b61587d60208301856142fe565b818103604083015261588f8184615603565b9050949350505050565b6000815190506158a88161437f565b92915050565b6000602082840312156158c4576158c3613da0565b5b60006158d284828501615899565b91505092915050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000615937602383613e70565b9150615942826158db565b604082019050919050565b600060208201905081810360008301526159668161592a565b9050919050565b60008160011c9050919050565b6000808291508390505b60018511156159c4578086048111156159a05761599f614877565b5b60018516156159af5780820291505b80810290506159bd8561596d565b9450615984565b94509492505050565b6000826159dd5760019050615a99565b816159eb5760009050615a99565b8160018114615a015760028114615a0b57615a3a565b6001915050615a99565b60ff841115615a1d57615a1c614877565b5b8360020a915084821115615a3457615a33614877565b5b50615a99565b5060208310610133831016604e8410600b8410161715615a6f5782820a905083811115615a6a57615a69614877565b5b615a99565b615a7c848484600161597a565b92509050818404811115615a9357615a92614877565b5b81810290505b9392505050565b6000615aab82613f17565b9150615ab683613f17565b9250615ae37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846159cd565b90509291505056fe68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d4d41544943267473796d733d5553442c4a50592c455552266170695f6b65793d7b613064333165666461636561366137393734646164613262373931613961303865366237366136323563363864373433323861366236643565363639303931387da2646970667358221220792766aee94b3299f8be5b598a2c368e6750745af275730259fc44e39d7954a264736f6c63430008110033",
  "deployedBytecode": "0x6080604052600436106101665760003560e01c80636b0f8b04116100d1578063a0dd94dc1161008a578063b88d4fde11610064578063b88d4fde14610529578063bec2a7c514610552578063c87b56dd14610582578063e985e9c5146105bf57610166565b8063a0dd94dc14610498578063a22cb465146104c3578063b6342bb4146104ec57610166565b80636b0f8b041461038e5780636b159766146103aa57806370a08231146103d557806377e587031461041257806386d6fdb51461044f57806395d89b411461046d57610166565b806323b872dd1161012357806323b872dd1461028f578063243adbdd146102b85780633143ec87146102d457806342842e0e146102ff5780634357855e146103285780636352211e1461035157610166565b806301ffc9a71461016b57806306fdde03146101a8578063081812fc146101d3578063095ea7b31461021057806315a70d8d14610239578063202e374014610264575b600080fd5b34801561017757600080fd5b50610192600480360381019061018d9190613e02565b6105fc565b60405161019f9190613e4a565b60405180910390f35b3480156101b457600080fd5b506101bd6106de565b6040516101ca9190613ef5565b60405180910390f35b3480156101df57600080fd5b506101fa60048036038101906101f59190613f4d565b610770565b6040516102079190613fbb565b60405180910390f35b34801561021c57600080fd5b5061023760048036038101906102329190614002565b6107b6565b005b34801561024557600080fd5b5061024e6108cd565b60405161025b91906141d3565b60405180910390f35b34801561027057600080fd5b50610279610c22565b60405161028691906141d3565b60405180910390f35b34801561029b57600080fd5b506102b660048036038101906102b191906141f5565b610f77565b005b6102d260048036038101906102cd9190613f4d565b610fd7565b005b3480156102e057600080fd5b506102e961145f565b6040516102f691906141d3565b60405180910390f35b34801561030b57600080fd5b50610326600480360381019061032191906141f5565b611731565b005b34801561033457600080fd5b5061034f600480360381019061034a919061427e565b611751565b005b34801561035d57600080fd5b5061037860048036038101906103739190613f4d565b611862565b6040516103859190613fbb565b60405180910390f35b6103a860048036038101906103a391906142be565b6118e8565b005b3480156103b657600080fd5b506103bf611a99565b6040516103cc919061430d565b60405180910390f35b3480156103e157600080fd5b506103fc60048036038101906103f79190614328565b611aa1565b604051610409919061430d565b60405180910390f35b34801561041e57600080fd5b50610439600480360381019061043491906142be565b611b58565b604051610446919061430d565b60405180910390f35b610457611bc5565b6040516104649190614364565b60405180910390f35b34801561047957600080fd5b50610482611d29565b60405161048f9190613ef5565b60405180910390f35b3480156104a457600080fd5b506104ad611dbb565b6040516104ba919061430d565b60405180910390f35b3480156104cf57600080fd5b506104ea60048036038101906104e591906143ab565b611dc1565b005b3480156104f857600080fd5b50610513600480360381019061050e9190613f4d565b611dd7565b604051610520919061430d565b60405180910390f35b34801561053557600080fd5b50610550600480360381019061054b9190614520565b611e45565b005b61056c60048036038101906105679190614644565b611ea7565b604051610579919061430d565b60405180910390f35b34801561058e57600080fd5b506105a960048036038101906105a49190613f4d565b611eee565b6040516105b69190613ef5565b60405180910390f35b3480156105cb57600080fd5b506105e660048036038101906105e191906146b3565b612000565b6040516105f39190613e4a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806106c757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806106d757506106d682612094565b5b9050919050565b6060600080546106ed90614722565b80601f016020809104026020016040519081016040528092919081815260200182805461071990614722565b80156107665780601f1061073b57610100808354040283529160200191610766565b820191906000526020600020905b81548152906001019060200180831161074957829003601f168201915b5050505050905090565b600061077b826120fe565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107c182611862565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610831576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610828906147c5565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610850612149565b73ffffffffffffffffffffffffffffffffffffffff16148061087f575061087e81610879612149565b612000565b5b6108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b590614857565b60405180910390fd5b6108c88383612151565b505050565b606060006108db600f61220a565b905060008060005b83811015610982573373ffffffffffffffffffffffffffffffffffffffff16600d600060018461091391906148a6565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361096f57828061096b906148da565b9350505b808061097a906148da565b9150506108e3565b5060008267ffffffffffffffff81111561099f5761099e6143f5565b5b6040519080825280602002602001820160405280156109d857816020015b6109c5613c86565b8152602001906001900390816109bd5790505b50905060005b84811015610c17573373ffffffffffffffffffffffffffffffffffffffff16600d6000600184610a0e91906148a6565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610c04576000600182610a6a91906148a6565b90506000600d600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050848681518110610be857610be7614922565b5b60200260200101819052508480610bfe906148da565b95505050505b8080610c0f906148da565b9150506109de565b508094505050505090565b60606000610c30600f61220a565b905060008060005b83811015610cd7573373ffffffffffffffffffffffffffffffffffffffff16600d6000600184610c6891906148a6565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610cc4578280610cc0906148da565b9350505b8080610ccf906148da565b915050610c38565b5060008267ffffffffffffffff811115610cf457610cf36143f5565b5b604051908082528060200260200182016040528015610d2d57816020015b610d1a613c86565b815260200190600190039081610d125790505b50905060005b84811015610f6c573373ffffffffffffffffffffffffffffffffffffffff16600d6000600184610d6391906148a6565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610f59576000600182610dbf91906148a6565b90506000600d600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050848681518110610f3d57610f3c614922565b5b60200260200101819052508480610f53906148da565b95505050505b8080610f64906148da565b915050610d33565b508094505050505090565b610f88610f82612149565b82612218565b610fc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbe906149c3565b60405180910390fd5b610fd28383836122ad565b505050565b6000600d60008381526020019081526020016000206004015490506000600d60008481526020019081526020016000206005015490506000600d600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600d600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508334146110c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110bc90614a55565b60405180910390fd5b33600d600087815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600d600087815260200190815260200160002060070160006101000a81548160ff0219169083151502179055506000600d600087815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111a960106125a6565b6111b43033876122ad565b600d600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600d600087815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361132757600061125e85611dd7565b90506000813461126e9190614a75565b9050600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156112d8573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561131f573d6000803e3d6000fd5b505050611458565b600061133285611dd7565b905060006113408686611b58565b90506000818361135091906148a6565b3461135b9190614a75565b90508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156113a3573d6000803e3d6000fd5b50600e60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015801561140c573d6000803e3d6000fd5b508473ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611453573d6000803e3d6000fd5b505050505b5050505050565b6060600061146d600f61220a565b9050600061147b601061220a565b611485600f61220a565b61148f9190614a75565b90506000808267ffffffffffffffff8111156114ae576114ad6143f5565b5b6040519080825280602002602001820160405280156114e757816020015b6114d4613c86565b8152602001906001900390816114cc5790505b50905060005b84811015611726573073ffffffffffffffffffffffffffffffffffffffff16600d600060018461151d91906148a6565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361171357600060018261157991906148a6565b90506000600d600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250508486815181106116f7576116f6614922565b5b6020026020010181905250848061170d906148da565b95505050505b808061171e906148da565b9150506114ed565b508094505050505090565b61174c83838360405180602001604052806000815250611e45565b505050565b81600c600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ea90614b1b565b60405180910390fd5b600c600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281601381905550505050565b60008061186e836125bc565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d690614b87565b60405180910390fd5b80915050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600d600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461198c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198390614bf3565b60405180910390fd5b30600d600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600d600084815260200190815260200160002060070160006101000a81548160ff02191690831515021790555033600d600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d600084815260200190815260200160002060040181905550611a8a60106125f9565b611a953330846122ad565b5050565b600047905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0890614c85565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600067016345785d8a00008311611ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9b90614d17565b60405180910390fd5b8161271084611bb39190614d66565b611bbd9190614d97565b905092915050565b600080611bdc60115430634357855e60e01b612655565b9050611c406040518060400160405280600381526020017f67657400000000000000000000000000000000000000000000000000000000008152506040518060c0016040528060948152602001615aec60949139836126869092919063ffffffff16565b611cbf6040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5553440000000000000000000000000000000000000000000000000000000000815250836126869092919063ffffffff16565b6000670de0b6b3a76400009050611d166040518060400160405280600581526020017f74696d657300000000000000000000000000000000000000000000000000000081525082846126b99092919063ffffffff16565b611d22826012546126ec565b9250505090565b606060018054611d3890614722565b80601f0160208091040260200160405190810160405280929190818152602001828054611d6490614722565b8015611db15780601f10611d8657610100808354040283529160200191611db1565b820191906000526020600020905b815481529060010190602001808311611d9457829003601f168201915b5050505050905090565b60135481565b611dd3611dcc612149565b8383612723565b5050565b600067016345785d8a00008211611e23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1a90614d17565b60405180910390fd5b61012c61271083611e349190614d66565b611e3e9190614d97565b9050919050565b611e56611e50612149565b83612218565b611e95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e8c906149c3565b60405180910390fd5b611ea18484848461288f565b50505050565b6000611eb3600f6125a6565b6000611ebf600f61220a565b9050611ecb33826128eb565b611ed58186612b08565b611ee3818585601354612b75565b809150509392505050565b6060611ef9826120fe565b6000600660008481526020019081526020016000208054611f1990614722565b80601f0160208091040260200160405190810160405280929190818152602001828054611f4590614722565b8015611f925780601f10611f6757610100808354040283529160200191611f92565b820191906000526020600020905b815481529060010190602001808311611f7557829003601f168201915b505050505090506000611fa3612d9e565b90506000815103611fb8578192505050611ffb565b600082511115611fed578082604051602001611fd5929190614e15565b60405160208183030381529060405292505050611ffb565b611ff684612db5565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61210781612e1d565b612146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213d90614b87565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166121c483611862565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b60008061222483611862565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061226657506122658185612000565b5b806122a457508373ffffffffffffffffffffffffffffffffffffffff1661228c84610770565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166122cd82611862565b73ffffffffffffffffffffffffffffffffffffffff1614612323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231a90614eab565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612392576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161238990614f3d565b60405180910390fd5b61239f8383836001612e5e565b8273ffffffffffffffffffffffffffffffffffffffff166123bf82611862565b73ffffffffffffffffffffffffffffffffffffffff1614612415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161240c90614eab565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46125a18383836001612f84565b505050565b6001816000016000828254019250508190555050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008160000154905060008111612645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161263c90614fa9565b60405180910390fd5b6001810382600001819055505050565b61265d613d0f565b612665613d0f565b61267c85858584612f8a909392919063ffffffff16565b9150509392505050565b61269d82846080015161303a90919063ffffffff16565b6126b481846080015161303a90919063ffffffff16565b505050565b6126d082846080015161303a90919063ffffffff16565b6126e781846080015161305f90919063ffffffff16565b505050565b600061271b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848461310c565b905092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161278890615015565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516128829190613e4a565b60405180910390a3505050565b61289a8484846122ad565b6128a6848484846131d8565b6128e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128dc906150a7565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361295a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161295190615113565b60405180910390fd5b61296381612e1d565b156129a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161299a9061517f565b60405180910390fd5b6129b1600083836001612e5e565b6129ba81612e1d565b156129fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129f19061517f565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612b04600083836001612f84565b5050565b612b1182612e1d565b612b50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b4790615211565b60405180910390fd5b80600660008481526020019081526020016000209081612b7091906153dd565b505050565b60008311612bb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612baf906154fb565b60405180910390fd5b612bc0611bc5565b5083600d60008681526020019081526020016000206000018190555082600d60008681526020019081526020016000206004018190555081600d600086815260200190815260200160002060050181905550670de0b6b3a76400008184612c279190614d97565b612c319190614d66565b600d60008681526020019081526020016000206006018190555033600d600086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600d600086815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600d600086815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612d553330866122ad565b837f57bc5db4260382b0aa84042772478b244fd59a2fa4988fcc77e2d7c0d09dec7033303387876000604051612d909695949392919061552a565b60405180910390a250505050565b606060405180602001604052806000815250905090565b6060612dc0826120fe565b6000612dca612d9e565b90506000815111612dea5760405180602001604052806000815250612e15565b80612df48461335f565b604051602001612e05929190614e15565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16612e3f836125bc565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6001811115612f7e57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612ef25780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612eea9190614a75565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612f7d5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612f7591906148a6565b925050819055505b5b50505050565b50505050565b612f92613d0f565b612fa2856080015161010061342d565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6130478260038351613497565b61305a818361361c90919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000081121561309657613091828261363e565b613108565b67ffffffffffffffff8113156130b5576130b082826136b5565b613107565b600081126130ce576130c982600083613497565b613106565b613105826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6131009190615595565b613497565b5b5b5b5050565b600080600b54905060018161312191906148a6565b600b819055506000634042994660e01b60008087600001513089604001518760018c608001516000015160405160240161316298979695949392919061563c565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506131cd86838684613701565b925050509392505050565b60006131f98473ffffffffffffffffffffffffffffffffffffffff16613896565b15613352578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02613222612149565b8786866040518563ffffffff1660e01b815260040161324494939291906156c1565b6020604051808303816000875af192505050801561328057506040513d601f19601f8201168201806040525081019061327d9190615722565b60015b613302573d80600081146132b0576040519150601f19603f3d011682016040523d82523d6000602084013e6132b5565b606091505b5060008151036132fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132f1906150a7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050613357565b600190505b949350505050565b60606000600161336e846138b9565b01905060008167ffffffffffffffff81111561338d5761338c6143f5565b5b6040519080825280601f01601f1916602001820160405280156133bf5781602001600182028036833780820191505090505b509050600082602001820190505b600115613422578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161341657613415614d37565b5b049450600085036133cd575b819350505050919050565b613435613d7c565b6000602083613444919061574f565b1461347057602082613456919061574f565b60206134629190614a75565b8261346d91906148a6565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff16116134ce576134c88160058460ff16901b60ff161784613a0c90919063ffffffff16565b50613617565b60ff8167ffffffffffffffff1611613524576134fd601860058460ff16901b1784613a0c90919063ffffffff16565b5061351e8167ffffffffffffffff16600185613a2c9092919063ffffffff16565b50613616565b61ffff8167ffffffffffffffff161161357b57613554601960058460ff16901b1784613a0c90919063ffffffff16565b506135758167ffffffffffffffff16600285613a2c9092919063ffffffff16565b50613615565b63ffffffff8167ffffffffffffffff16116135d4576135ad601a60058460ff16901b1784613a0c90919063ffffffff16565b506135ce8167ffffffffffffffff16600485613a2c9092919063ffffffff16565b50613614565b6135f1601b60058460ff16901b1784613a0c90919063ffffffff16565b506136128167ffffffffffffffff16600885613a2c9092919063ffffffff16565b505b5b5b5b505050565b613624613d7c565b61363683846000015151848551613a4e565b905092915050565b61365c60036005600660ff16901b1783613a0c90919063ffffffff16565b506136b182827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61368d9190615595565b60405160200161369d919061430d565b604051602081830303815290604052613b3d565b5050565b6136d360026005600660ff16901b1783613a0c90919063ffffffff16565b506136fd82826040516020016136e9919061430d565b604051602081830303815290604052613b3d565b5050565b6000308460405160200161371692919061582f565b60405160208183030381529060405280519060200120905084600c600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b815260040161380c9392919061585b565b6020604051808303816000875af115801561382b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061384f91906158ae565b61388e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016138859061594d565b60405180910390fd5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613917577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161390d5761390c614d37565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613954576d04ee2d6d415b85acef8100000000838161394a57613949614d37565b5b0492506020810190505b662386f26fc10000831061398357662386f26fc10000838161397957613978614d37565b5b0492506010810190505b6305f5e10083106139ac576305f5e10083816139a2576139a1614d37565b5b0492506008810190505b61271083106139d15761271083816139c7576139c6614d37565b5b0492506004810190505b606483106139f457606483816139ea576139e9614d37565b5b0492506002810190505b600a8310613a03576001810190505b80915050919050565b613a14613d7c565b613a248384600001515184613b62565b905092915050565b613a34613d7c565b613a45848560000151518585613bb8565b90509392505050565b613a56613d7c565b8251821115613a6457600080fd5b84602001518285613a7591906148a6565b1115613aaa57613aa9856002613a9a88602001518887613a9591906148a6565b613c46565b613aa49190614d97565b613c62565b5b600080865180518760208301019350808887011115613ac95787860182525b60208701925050505b60208410613b105780518252602082613aeb91906148a6565b9150602081613afa91906148a6565b9050602084613b099190614a75565b9350613ad2565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b613b4a8260028351613497565b613b5d818361361c90919063ffffffff16565b505050565b613b6a613d7c565b83602001518310613b9057613b8f8460028660200151613b8a9190614d97565b613c62565b5b83518051602085830101848153818603613bab576001820183525b5050508390509392505050565b613bc0613d7c565b84602001518483613bd191906148a6565b1115613bf957613bf88560028685613be991906148a6565b613bf39190614d97565b613c62565b5b6000600183610100613c0b9190615aa0565b613c159190614a75565b90508551838682010185831982511617815281518588011115613c385784870182525b505085915050949350505050565b600081831115613c5857829050613c5c565b8190505b92915050565b600082600001519050613c75838361342d565b50613c80838261361c565b50505050565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001613d76613d7c565b81525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613ddf81613daa565b8114613dea57600080fd5b50565b600081359050613dfc81613dd6565b92915050565b600060208284031215613e1857613e17613da0565b5b6000613e2684828501613ded565b91505092915050565b60008115159050919050565b613e4481613e2f565b82525050565b6000602082019050613e5f6000830184613e3b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613e9f578082015181840152602081019050613e84565b60008484015250505050565b6000601f19601f8301169050919050565b6000613ec782613e65565b613ed18185613e70565b9350613ee1818560208601613e81565b613eea81613eab565b840191505092915050565b60006020820190508181036000830152613f0f8184613ebc565b905092915050565b6000819050919050565b613f2a81613f17565b8114613f3557600080fd5b50565b600081359050613f4781613f21565b92915050565b600060208284031215613f6357613f62613da0565b5b6000613f7184828501613f38565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613fa582613f7a565b9050919050565b613fb581613f9a565b82525050565b6000602082019050613fd06000830184613fac565b92915050565b613fdf81613f9a565b8114613fea57600080fd5b50565b600081359050613ffc81613fd6565b92915050565b6000806040838503121561401957614018613da0565b5b600061402785828601613fed565b925050602061403885828601613f38565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61407781613f17565b82525050565b600061408882613f7a565b9050919050565b6140988161407d565b82525050565b6140a781613e2f565b82525050565b610100820160008201516140c4600085018261406e565b5060208201516140d7602085018261408f565b5060408201516140ea604085018261408f565b5060608201516140fd606085018261408f565b506080820151614110608085018261406e565b5060a082015161412360a085018261406e565b5060c082015161413660c085018261406e565b5060e082015161414960e085018261409e565b50505050565b600061415b83836140ad565b6101008301905092915050565b6000602082019050919050565b600061418082614042565b61418a818561404d565b93506141958361405e565b8060005b838110156141c65781516141ad888261414f565b97506141b883614168565b925050600181019050614199565b5085935050505092915050565b600060208201905081810360008301526141ed8184614175565b905092915050565b60008060006060848603121561420e5761420d613da0565b5b600061421c86828701613fed565b935050602061422d86828701613fed565b925050604061423e86828701613f38565b9150509250925092565b6000819050919050565b61425b81614248565b811461426657600080fd5b50565b60008135905061427881614252565b92915050565b6000806040838503121561429557614294613da0565b5b60006142a385828601614269565b92505060206142b485828601613f38565b9150509250929050565b600080604083850312156142d5576142d4613da0565b5b60006142e385828601613f38565b92505060206142f485828601613f38565b9150509250929050565b61430781613f17565b82525050565b600060208201905061432260008301846142fe565b92915050565b60006020828403121561433e5761433d613da0565b5b600061434c84828501613fed565b91505092915050565b61435e81614248565b82525050565b60006020820190506143796000830184614355565b92915050565b61438881613e2f565b811461439357600080fd5b50565b6000813590506143a58161437f565b92915050565b600080604083850312156143c2576143c1613da0565b5b60006143d085828601613fed565b92505060206143e185828601614396565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61442d82613eab565b810181811067ffffffffffffffff8211171561444c5761444b6143f5565b5b80604052505050565b600061445f613d96565b905061446b8282614424565b919050565b600067ffffffffffffffff82111561448b5761448a6143f5565b5b61449482613eab565b9050602081019050919050565b82818337600083830152505050565b60006144c36144be84614470565b614455565b9050828152602081018484840111156144df576144de6143f0565b5b6144ea8482856144a1565b509392505050565b600082601f830112614507576145066143eb565b5b81356145178482602086016144b0565b91505092915050565b6000806000806080858703121561453a57614539613da0565b5b600061454887828801613fed565b945050602061455987828801613fed565b935050604061456a87828801613f38565b925050606085013567ffffffffffffffff81111561458b5761458a613da5565b5b614597878288016144f2565b91505092959194509250565b600067ffffffffffffffff8211156145be576145bd6143f5565b5b6145c782613eab565b9050602081019050919050565b60006145e76145e2846145a3565b614455565b905082815260208101848484011115614603576146026143f0565b5b61460e8482856144a1565b509392505050565b600082601f83011261462b5761462a6143eb565b5b813561463b8482602086016145d4565b91505092915050565b60008060006060848603121561465d5761465c613da0565b5b600084013567ffffffffffffffff81111561467b5761467a613da5565b5b61468786828701614616565b935050602061469886828701613f38565b92505060406146a986828701613f38565b9150509250925092565b600080604083850312156146ca576146c9613da0565b5b60006146d885828601613fed565b92505060206146e985828601613fed565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061473a57607f821691505b60208210810361474d5761474c6146f3565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006147af602183613e70565b91506147ba82614753565b604082019050919050565b600060208201905081810360008301526147de816147a2565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000614841603d83613e70565b915061484c826147e5565b604082019050919050565b6000602082019050818103600083015261487081614834565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006148b182613f17565b91506148bc83613f17565b92508282019050808211156148d4576148d3614877565b5b92915050565b60006148e582613f17565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361491757614916614877565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006149ad602d83613e70565b91506149b882614951565b604082019050919050565b600060208201905081810360008301526149dc816149a0565b9050919050565b7f5375626d6974746564207072696365206e6f7420657175616c20746f204e465460008201527f2070726963652e00000000000000000000000000000000000000000000000000602082015250565b6000614a3f602783613e70565b9150614a4a826149e3565b604082019050919050565b60006020820190508181036000830152614a6e81614a32565b9050919050565b6000614a8082613f17565b9150614a8b83613f17565b9250828203905081811115614aa357614aa2614877565b5b92915050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000614b05602883613e70565b9150614b1082614aa9565b604082019050919050565b60006020820190508181036000830152614b3481614af8565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000614b71601883613e70565b9150614b7c82614b3b565b602082019050919050565b60006020820190508181036000830152614ba081614b64565b9050919050565b7f596f7520617265206e6f74206f776e6572206f662074686973204e4654000000600082015250565b6000614bdd601d83613e70565b9150614be882614ba7565b602082019050919050565b60006020820190508181036000830152614c0c81614bd0565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000614c6f602983613e70565b9150614c7a82614c13565b604082019050919050565b60006020820190508181036000830152614c9e81614c62565b9050919050565b7f53616c65207072696365206973206c657373207468616e20302e31204d41544960008201527f4300000000000000000000000000000000000000000000000000000000000000602082015250565b6000614d01602183613e70565b9150614d0c82614ca5565b604082019050919050565b60006020820190508181036000830152614d3081614cf4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614d7182613f17565b9150614d7c83613f17565b925082614d8c57614d8b614d37565b5b828204905092915050565b6000614da282613f17565b9150614dad83613f17565b9250828202614dbb81613f17565b91508282048414831517614dd257614dd1614877565b5b5092915050565b600081905092915050565b6000614def82613e65565b614df98185614dd9565b9350614e09818560208601613e81565b80840191505092915050565b6000614e218285614de4565b9150614e2d8284614de4565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000614e95602583613e70565b9150614ea082614e39565b604082019050919050565b60006020820190508181036000830152614ec481614e88565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614f27602483613e70565b9150614f3282614ecb565b604082019050919050565b60006020820190508181036000830152614f5681614f1a565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000614f93601b83613e70565b9150614f9e82614f5d565b602082019050919050565b60006020820190508181036000830152614fc281614f86565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614fff601983613e70565b915061500a82614fc9565b602082019050919050565b6000602082019050818103600083015261502e81614ff2565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000615091603283613e70565b915061509c82615035565b604082019050919050565b600060208201905081810360008301526150c081615084565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006150fd602083613e70565b9150615108826150c7565b602082019050919050565b6000602082019050818103600083015261512c816150f0565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615169601c83613e70565b915061517482615133565b602082019050919050565b600060208201905081810360008301526151988161515c565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006151fb602e83613e70565b91506152068261519f565b604082019050919050565b6000602082019050818103600083015261522a816151ee565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026152937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82615256565b61529d8683615256565b95508019841693508086168417925050509392505050565b6000819050919050565b60006152da6152d56152d084613f17565b6152b5565b613f17565b9050919050565b6000819050919050565b6152f4836152bf565b615308615300826152e1565b848454615263565b825550505050565b600090565b61531d615310565b6153288184846152eb565b505050565b5b8181101561534c57615341600082615315565b60018101905061532e565b5050565b601f8211156153915761536281615231565b61536b84615246565b8101602085101561537a578190505b61538e61538685615246565b83018261532d565b50505b505050565b600082821c905092915050565b60006153b460001984600802615396565b1980831691505092915050565b60006153cd83836153a3565b9150826002028217905092915050565b6153e682613e65565b67ffffffffffffffff8111156153ff576153fe6143f5565b5b6154098254614722565b615414828285615350565b600060209050601f8311600181146154475760008415615435578287015190505b61543f85826153c1565b8655506154a7565b601f19841661545586615231565b60005b8281101561547d57848901518255600182019150602085019450602081019050615458565b8683101561549a5784890151615496601f8916826153a3565b8355505b6001600288020188555050505b505050505050565b7f50726963652063616e2774206265207a65726f2e000000000000000000000000600082015250565b60006154e5601483613e70565b91506154f0826154af565b602082019050919050565b60006020820190508181036000830152615514816154d8565b9050919050565b6155248161407d565b82525050565b600060c08201905061553f600083018961551b565b61554c602083018861551b565b615559604083018761551b565b61556660608301866142fe565b61557360808301856142fe565b61558060a0830184613e3b565b979650505050505050565b6000819050919050565b60006155a08261558b565b91506155ab8361558b565b92508282039050818112600084121682821360008512151617156155d2576155d1614877565b5b92915050565b6155e181613daa565b82525050565b600081519050919050565b600082825260208201905092915050565b600061560e826155e7565b61561881856155f2565b9350615628818560208601613e81565b61563181613eab565b840191505092915050565b600061010082019050615652600083018b613fac565b61565f602083018a6142fe565b61566c6040830189614355565b6156796060830188613fac565b61568660808301876155d8565b61569360a08301866142fe565b6156a060c08301856142fe565b81810360e08301526156b28184615603565b90509998505050505050505050565b60006080820190506156d66000830187613fac565b6156e36020830186613fac565b6156f060408301856142fe565b81810360608301526157028184615603565b905095945050505050565b60008151905061571c81613dd6565b92915050565b60006020828403121561573857615737613da0565b5b60006157468482850161570d565b91505092915050565b600061575a82613f17565b915061576583613f17565b92508261577557615774614d37565b5b828206905092915050565b600061579b61579661579184613f7a565b6152b5565b613f7a565b9050919050565b60006157ad82615780565b9050919050565b60006157bf826157a2565b9050919050565b60008160601b9050919050565b60006157de826157c6565b9050919050565b60006157f0826157d3565b9050919050565b615808615803826157b4565b6157e5565b82525050565b6000819050919050565b61582961582482613f17565b61580e565b82525050565b600061583b82856157f7565b60148201915061584b8284615818565b6020820191508190509392505050565b60006060820190506158706000830186613fac565b61587d60208301856142fe565b818103604083015261588f8184615603565b9050949350505050565b6000815190506158a88161437f565b92915050565b6000602082840312156158c4576158c3613da0565b5b60006158d284828501615899565b91505092915050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000615937602383613e70565b9150615942826158db565b604082019050919050565b600060208201905081810360008301526159668161592a565b9050919050565b60008160011c9050919050565b6000808291508390505b60018511156159c4578086048111156159a05761599f614877565b5b60018516156159af5780820291505b80810290506159bd8561596d565b9450615984565b94509492505050565b6000826159dd5760019050615a99565b816159eb5760009050615a99565b8160018114615a015760028114615a0b57615a3a565b6001915050615a99565b60ff841115615a1d57615a1c614877565b5b8360020a915084821115615a3457615a33614877565b5b50615a99565b5060208310610133831016604e8410600b8410161715615a6f5782820a905083811115615a6a57615a69614877565b5b615a99565b615a7c848484600161597a565b92509050818404811115615a9357615a92614877565b5b81810290505b9392505050565b6000615aab82613f17565b9150615ab683613f17565b9250615ae37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846159cd565b90509291505056fe68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d4d41544943267473796d733d5553442c4a50592c455552266170695f6b65793d7b613064333165666461636561366137393734646164613262373931613961303865366237366136323563363864373433323861366236643565363639303931387da2646970667358221220792766aee94b3299f8be5b598a2c368e6750745af275730259fc44e39d7954a264736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
