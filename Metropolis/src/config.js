export const contractAddress = '0x8bDa652c0E187dFe10C2Ecc6F5BadB88eC778Ff7'

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
      "inputs": [],
      "name": "getTrustedForwarder",
      "outputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "isTrustedForwarder",
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
    },
    {
      "inputs": [],
      "name": "versionRecipient",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526001600b556040518060400160405280600581526020017f322e322e30000000000000000000000000000000000000000000000000000000815250601590816200004f9190620005e9565b503480156200005d57600080fd5b506040518060400160405280600e81526020017f4d6574726f706f6c6973204e46540000000000000000000000000000000000008152506040518060400160405280600581526020017f4d4554524f0000000000000000000000000000000000000000000000000000008152508160009081620000db9190620005e9565b508060019081620000ed9190620005e9565b505050620001157384a0856b038eaad1cc7e297cf34a7e72685a8693620001eb60201b60201c565b620001256200022f60201b60201c565b600f60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018a73326c977e6efc84e512bb9c30f76e30c160ed06fb6200024b60201b60201c565b620001af7340193c8518bb267228fc409a613bdbd8ec5a97b36200028f60201b60201c565b7f636139383336366363373331343935376238633031326337326630356165656260128190555067016345785d8a0000601381905550620006d0565b80600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600062000246620002d360201b620022d01760201c565b905090565b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006014600036905010158015620002f85750620002f7336200031560201b60201c565b5b156200030e57601436033560601c905062000312565b3390505b90565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003f157607f821691505b602082108103620004075762000406620003a9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004717fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000432565b6200047d868362000432565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004ca620004c4620004be8462000495565b6200049f565b62000495565b9050919050565b6000819050919050565b620004e683620004a9565b620004fe620004f582620004d1565b8484546200043f565b825550505050565b600090565b6200051562000506565b62000522818484620004db565b505050565b5b818110156200054a576200053e6000826200050b565b60018101905062000528565b5050565b601f821115620005995762000563816200040d565b6200056e8462000422565b810160208510156200057e578190505b620005966200058d8562000422565b83018262000527565b50505b505050565b600082821c905092915050565b6000620005be600019846008026200059e565b1980831691505092915050565b6000620005d98383620005ab565b9150826002028217905092915050565b620005f4826200036f565b67ffffffffffffffff81111562000610576200060f6200037a565b5b6200061c8254620003d8565b620006298282856200054e565b600060209050601f8311600181146200066157600084156200064c578287015190505b620006588582620005cb565b865550620006c8565b601f19841662000671866200040d565b60005b828110156200069b5784890151825560018201915060208501945060208101905062000674565b86831015620006bb5784890151620006b7601f891682620005ab565b8355505b6001600288020188555050505b505050505050565b615e5280620006e06000396000f3fe6080604052600436106101b75760003560e01c80636b0f8b04116100ec578063a22cb4651161008a578063bec2a7c511610064578063bec2a7c51461060b578063c87b56dd1461063b578063ce1b815f14610678578063e985e9c5146106a3576101b7565b8063a22cb4651461057c578063b6342bb4146105a5578063b88d4fde146105e2576101b7565b806377e58703116100c657806377e58703146104cb57806386d6fdb51461050857806395d89b4114610526578063a0dd94dc14610551576101b7565b80636b0f8b04146104475780636b1597661461046357806370a082311461048e576101b7565b8063243adbdd116101595780634357855e116101335780634357855e14610379578063486ff0cd146103a2578063572b6c05146103cd5780636352211e1461040a576101b7565b8063243adbdd146103095780633143ec871461032557806342842e0e14610350576101b7565b8063095ea7b311610195578063095ea7b31461026157806315a70d8d1461028a578063202e3740146102b557806323b872dd146102e0576101b7565b806301ffc9a7146101bc57806306fdde03146101f9578063081812fc14610224575b600080fd5b3480156101c857600080fd5b506101e360048036038101906101de919061409f565b6106e0565b6040516101f091906140e7565b60405180910390f35b34801561020557600080fd5b5061020e6107c2565b60405161021b9190614192565b60405180910390f35b34801561023057600080fd5b5061024b600480360381019061024691906141ea565b610854565b6040516102589190614258565b60405180910390f35b34801561026d57600080fd5b506102886004803603810190610283919061429f565b61089a565b005b34801561029657600080fd5b5061029f6109b1565b6040516102ac9190614470565b60405180910390f35b3480156102c157600080fd5b506102ca610d14565b6040516102d79190614470565b60405180910390f35b3480156102ec57600080fd5b5061030760048036038101906103029190614492565b611077565b005b610323600480360381019061031e91906141ea565b6110d7565b005b34801561033157600080fd5b5061033a61156d565b6040516103479190614470565b60405180910390f35b34801561035c57600080fd5b5061037760048036038101906103729190614492565b61183f565b005b34801561038557600080fd5b506103a0600480360381019061039b919061451b565b61185f565b005b3480156103ae57600080fd5b506103b7611970565b6040516103c49190614192565b60405180910390f35b3480156103d957600080fd5b506103f460048036038101906103ef919061455b565b6119fe565b60405161040191906140e7565b60405180910390f35b34801561041657600080fd5b50610431600480360381019061042c91906141ea565b611a58565b60405161043e9190614258565b60405180910390f35b610461600480360381019061045c9190614588565b611ade565b005b34801561046f57600080fd5b50610478611ca4565b60405161048591906145d7565b60405180910390f35b34801561049a57600080fd5b506104b560048036038101906104b0919061455b565b611cac565b6040516104c291906145d7565b60405180910390f35b3480156104d757600080fd5b506104f260048036038101906104ed9190614588565b611d63565b6040516104ff91906145d7565b60405180910390f35b610510611dd0565b60405161051d9190614601565b60405180910390f35b34801561053257600080fd5b5061053b611f34565b6040516105489190614192565b60405180910390f35b34801561055d57600080fd5b50610566611fc6565b60405161057391906145d7565b60405180910390f35b34801561058857600080fd5b506105a3600480360381019061059e9190614648565b611fcc565b005b3480156105b157600080fd5b506105cc60048036038101906105c791906141ea565b611fe2565b6040516105d991906145d7565b60405180910390f35b3480156105ee57600080fd5b50610609600480360381019061060491906147bd565b612050565b005b610625600480360381019061062091906148e1565b6120b2565b60405161063291906145d7565b60405180910390f35b34801561064757600080fd5b50610662600480360381019061065d91906141ea565b612100565b60405161066f9190614192565b60405180910390f35b34801561068457600080fd5b5061068d612212565b60405161069a9190614258565b60405180910390f35b3480156106af57600080fd5b506106ca60048036038101906106c59190614950565b61223c565b6040516106d791906140e7565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107ab57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806107bb57506107ba82612307565b5b9050919050565b6060600080546107d1906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546107fd906149bf565b801561084a5780601f1061081f5761010080835404028352916020019161084a565b820191906000526020600020905b81548152906001019060200180831161082d57829003601f168201915b5050505050905090565b600061085f82612371565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006108a582611a58565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c90614a62565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109346123bc565b73ffffffffffffffffffffffffffffffffffffffff16148061096357506109628161095d6123bc565b61223c565b5b6109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099990614af4565b60405180910390fd5b6109ac83836123cb565b505050565b606060006109bf6010612484565b905060008060005b83811015610a6d576109d76123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e60006001846109fe9190614b43565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a5a578280610a5690614b77565b9350505b8080610a6590614b77565b9150506109c7565b5060008267ffffffffffffffff811115610a8a57610a89614692565b5b604051908082528060200260200182016040528015610ac357816020015b610ab0613f23565b815260200190600190039081610aa85790505b50905060005b84811015610d0957610ad96123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e6000600184610b009190614b43565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610cf6576000600182610b5c9190614b43565b90506000600e600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050848681518110610cda57610cd9614bbf565b5b60200260200101819052508480610cf090614b77565b95505050505b8080610d0190614b77565b915050610ac9565b508094505050505090565b60606000610d226010612484565b905060008060005b83811015610dd057610d3a6123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e6000600184610d619190614b43565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610dbd578280610db990614b77565b9350505b8080610dc890614b77565b915050610d2a565b5060008267ffffffffffffffff811115610ded57610dec614692565b5b604051908082528060200260200182016040528015610e2657816020015b610e13613f23565b815260200190600190039081610e0b5790505b50905060005b8481101561106c57610e3c6123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e6000600184610e639190614b43565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611059576000600182610ebf9190614b43565b90506000600e600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505084868151811061103d5761103c614bbf565b5b6020026020010181905250848061105390614b77565b95505050505b808061106490614b77565b915050610e2c565b508094505050505090565b6110886110826123bc565b82612492565b6110c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110be90614c60565b60405180910390fd5b6110d2838383612527565b505050565b6000600e60008381526020019081526020016000206004015490506000600e60008481526020019081526020016000206005015490506000600e600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600e600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508334146111c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bc90614cf2565b60405180910390fd5b6111cd6123bc565b600e600087815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600e600087815260200190815260200160002060070160006101000a81548160ff0219169083151502179055506000600e600087815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506112b06011612820565b6112c2306112bc6123bc565b87612527565b600e600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600e600087815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361143557600061136c85611fe2565b90506000813461137c9190614d12565b9050600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156113e6573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561142d573d6000803e3d6000fd5b505050611566565b600061144085611fe2565b9050600061144e8686611d63565b90506000818361145e9190614b43565b346114699190614d12565b90508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156114b1573d6000803e3d6000fd5b50600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015801561151a573d6000803e3d6000fd5b508473ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611561573d6000803e3d6000fd5b505050505b5050505050565b6060600061157b6010612484565b905060006115896011612484565b6115936010612484565b61159d9190614d12565b90506000808267ffffffffffffffff8111156115bc576115bb614692565b5b6040519080825280602002602001820160405280156115f557816020015b6115e2613f23565b8152602001906001900390816115da5790505b50905060005b84811015611834573073ffffffffffffffffffffffffffffffffffffffff16600e600060018461162b9190614b43565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036118215760006001826116879190614b43565b90506000600e600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505084868151811061180557611804614bbf565b5b6020026020010181905250848061181b90614b77565b95505050505b808061182c90614b77565b9150506115fb565b508094505050505090565b61185a83838360405180602001604052806000815250612050565b505050565b81600c600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f890614db8565b60405180910390fd5b600c600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281601481905550505050565b6015805461197d906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546119a9906149bf565b80156119f65780601f106119cb576101008083540402835291602001916119f6565b820191906000526020600020905b8154815290600101906020018083116119d957829003601f168201915b505050505081565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600080611a6483612836565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ad5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611acc90614e24565b60405180910390fd5b80915050919050565b611ae66123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8090614e90565b60405180910390fd5b30600e600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600e600084815260200190815260200160002060070160006101000a81548160ff021916908315150217905550611c156123bc565b600e600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600e600084815260200190815260200160002060040181905550611c8e6011612873565b611ca0611c996123bc565b3084612527565b5050565b600047905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611d1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1390614f22565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600067016345785d8a00008311611daf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611da690614fb4565b60405180910390fd5b8161271084611dbe9190615003565b611dc89190615034565b905092915050565b600080611de760125430634357855e60e01b6128cf565b9050611e4b6040518060400160405280600381526020017f67657400000000000000000000000000000000000000000000000000000000008152506040518060c0016040528060948152602001615d8960949139836129009092919063ffffffff16565b611eca6040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5553440000000000000000000000000000000000000000000000000000000000815250836129009092919063ffffffff16565b6000670de0b6b3a76400009050611f216040518060400160405280600581526020017f74696d657300000000000000000000000000000000000000000000000000000081525082846129339092919063ffffffff16565b611f2d82601354612966565b9250505090565b606060018054611f43906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6f906149bf565b8015611fbc5780601f10611f9157610100808354040283529160200191611fbc565b820191906000526020600020905b815481529060010190602001808311611f9f57829003601f168201915b5050505050905090565b60145481565b611fde611fd76123bc565b838361299d565b5050565b600067016345785d8a0000821161202e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161202590614fb4565b60405180910390fd5b61012c6127108361203f9190615003565b6120499190615034565b9050919050565b61206161205b6123bc565b83612492565b6120a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209790614c60565b60405180910390fd5b6120ac84848484612b09565b50505050565b60006120be6010612820565b60006120ca6010612484565b90506120dd6120d76123bc565b82612b65565b6120e78186612d82565b6120f5818585601454612def565b809150509392505050565b606061210b82612371565b600060066000848152602001908152602001600020805461212b906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054612157906149bf565b80156121a45780601f10612179576101008083540402835291602001916121a4565b820191906000526020600020905b81548152906001019060200180831161218757829003601f168201915b5050505050905060006121b561303b565b905060008151036121ca57819250505061220d565b6000825111156121ff5780826040516020016121e79291906150b2565b6040516020818303038152906040529250505061220d565b61220884613052565b925050505b919050565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600060146000369050101580156122ec57506122eb336119fe565b5b1561230057601436033560601c9050612304565b3390505b90565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61237a816130ba565b6123b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123b090614e24565b60405180910390fd5b50565b60006123c66122d0565b905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661243e83611a58565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b60008061249e83611a58565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124e057506124df818561223c565b5b8061251e57508373ffffffffffffffffffffffffffffffffffffffff1661250684610854565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661254782611a58565b73ffffffffffffffffffffffffffffffffffffffff161461259d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161259490615148565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361260c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612603906151da565b60405180910390fd5b61261983838360016130fb565b8273ffffffffffffffffffffffffffffffffffffffff1661263982611a58565b73ffffffffffffffffffffffffffffffffffffffff161461268f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161268690615148565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461281b8383836001613221565b505050565b6001816000016000828254019250508190555050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081600001549050600081116128bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b690615246565b60405180910390fd5b6001810382600001819055505050565b6128d7613fac565b6128df613fac565b6128f685858584613227909392919063ffffffff16565b9150509392505050565b6129178284608001516132d790919063ffffffff16565b61292e8184608001516132d790919063ffffffff16565b505050565b61294a8284608001516132d790919063ffffffff16565b6129618184608001516132fc90919063ffffffff16565b505050565b6000612995600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846133a9565b905092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a02906152b2565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612afc91906140e7565b60405180910390a3505050565b612b14848484612527565b612b2084848484613475565b612b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b5690615344565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612bd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bcb906153b0565b60405180910390fd5b612bdd816130ba565b15612c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c149061541c565b60405180910390fd5b612c2b6000838360016130fb565b612c34816130ba565b15612c74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c6b9061541c565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612d7e600083836001613221565b5050565b612d8b826130ba565b612dca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dc1906154ae565b60405180910390fd5b80600660008481526020019081526020016000209081612dea919061567a565b505050565b60008311612e32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e2990615798565b60405180910390fd5b612e3a611dd0565b5083600e60008681526020019081526020016000206000018190555082600e60008681526020019081526020016000206004018190555081600e600086815260200190815260200160002060050181905550670de0b6b3a76400008184612ea19190615034565b612eab9190615003565b600e600086815260200190815260200160002060060181905550612ecd6123bc565b600e600086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600e600086815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612f7e6123bc565b600e600086815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612fe4612fdd6123bc565b3086612527565b837f57bc5db4260382b0aa84042772478b244fd59a2fa4988fcc77e2d7c0d09dec7061300e6123bc565b306130176123bc565b8787600060405161302d969594939291906157c7565b60405180910390a250505050565b606060405180602001604052806000815250905090565b606061305d82612371565b600061306761303b565b9050600081511161308757604051806020016040528060008152506130b2565b80613091846135fc565b6040516020016130a29291906150b2565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166130dc83612836565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561321b57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461318f5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546131879190614d12565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461321a5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546132129190614b43565b925050819055505b5b50505050565b50505050565b61322f613fac565b61323f85608001516101006136ca565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6132e48260038351613734565b6132f781836138b990919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008112156133335761332e82826138db565b6133a5565b67ffffffffffffffff8113156133525761334d8282613952565b6133a4565b6000811261336b5761336682600083613734565b6133a3565b6133a2826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61339d9190615832565b613734565b5b5b5b5050565b600080600b5490506001816133be9190614b43565b600b819055506000634042994660e01b60008087600001513089604001518760018c60800151600001516040516024016133ff9897969594939291906158d9565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905061346a8683868461399e565b925050509392505050565b60006134968473ffffffffffffffffffffffffffffffffffffffff16613b33565b156135ef578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026134bf6123bc565b8786866040518563ffffffff1660e01b81526004016134e1949392919061595e565b6020604051808303816000875af192505050801561351d57506040513d601f19601f8201168201806040525081019061351a91906159bf565b60015b61359f573d806000811461354d576040519150601f19603f3d011682016040523d82523d6000602084013e613552565b606091505b506000815103613597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161358e90615344565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506135f4565b600190505b949350505050565b60606000600161360b84613b56565b01905060008167ffffffffffffffff81111561362a57613629614692565b5b6040519080825280601f01601f19166020018201604052801561365c5781602001600182028036833780820191505090505b509050600082602001820190505b6001156136bf578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816136b3576136b2614fd4565b5b0494506000850361366a575b819350505050919050565b6136d2614019565b60006020836136e191906159ec565b1461370d576020826136f391906159ec565b60206136ff9190614d12565b8261370a9190614b43565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff161161376b576137658160058460ff16901b60ff161784613ca990919063ffffffff16565b506138b4565b60ff8167ffffffffffffffff16116137c15761379a601860058460ff16901b1784613ca990919063ffffffff16565b506137bb8167ffffffffffffffff16600185613cc99092919063ffffffff16565b506138b3565b61ffff8167ffffffffffffffff1611613818576137f1601960058460ff16901b1784613ca990919063ffffffff16565b506138128167ffffffffffffffff16600285613cc99092919063ffffffff16565b506138b2565b63ffffffff8167ffffffffffffffff16116138715761384a601a60058460ff16901b1784613ca990919063ffffffff16565b5061386b8167ffffffffffffffff16600485613cc99092919063ffffffff16565b506138b1565b61388e601b60058460ff16901b1784613ca990919063ffffffff16565b506138af8167ffffffffffffffff16600885613cc99092919063ffffffff16565b505b5b5b5b505050565b6138c1614019565b6138d383846000015151848551613ceb565b905092915050565b6138f960036005600660ff16901b1783613ca990919063ffffffff16565b5061394e82827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61392a9190615832565b60405160200161393a91906145d7565b604051602081830303815290604052613dda565b5050565b61397060026005600660ff16901b1783613ca990919063ffffffff16565b5061399a828260405160200161398691906145d7565b604051602081830303815290604052613dda565b5050565b600030846040516020016139b3929190615acc565b60405160208183030381529060405280519060200120905084600c600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b8152600401613aa993929190615af8565b6020604051808303816000875af1158015613ac8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613aec9190615b4b565b613b2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613b2290615bea565b60405180910390fd5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613bb4577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381613baa57613ba9614fd4565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613bf1576d04ee2d6d415b85acef81000000008381613be757613be6614fd4565b5b0492506020810190505b662386f26fc100008310613c2057662386f26fc100008381613c1657613c15614fd4565b5b0492506010810190505b6305f5e1008310613c49576305f5e1008381613c3f57613c3e614fd4565b5b0492506008810190505b6127108310613c6e576127108381613c6457613c63614fd4565b5b0492506004810190505b60648310613c915760648381613c8757613c86614fd4565b5b0492506002810190505b600a8310613ca0576001810190505b80915050919050565b613cb1614019565b613cc18384600001515184613dff565b905092915050565b613cd1614019565b613ce2848560000151518585613e55565b90509392505050565b613cf3614019565b8251821115613d0157600080fd5b84602001518285613d129190614b43565b1115613d4757613d46856002613d3788602001518887613d329190614b43565b613ee3565b613d419190615034565b613eff565b5b600080865180518760208301019350808887011115613d665787860182525b60208701925050505b60208410613dad5780518252602082613d889190614b43565b9150602081613d979190614b43565b9050602084613da69190614d12565b9350613d6f565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b613de78260028351613734565b613dfa81836138b990919063ffffffff16565b505050565b613e07614019565b83602001518310613e2d57613e2c8460028660200151613e279190615034565b613eff565b5b83518051602085830101848153818603613e48576001820183525b5050508390509392505050565b613e5d614019565b84602001518483613e6e9190614b43565b1115613e9657613e958560028685613e869190614b43565b613e909190615034565b613eff565b5b6000600183610100613ea89190615d3d565b613eb29190614d12565b90508551838682010185831982511617815281518588011115613ed55784870182525b505085915050949350505050565b600081831115613ef557829050613ef9565b8190505b92915050565b600082600001519050613f1283836136ca565b50613f1d83826138b9565b50505050565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001614013614019565b81525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61407c81614047565b811461408757600080fd5b50565b60008135905061409981614073565b92915050565b6000602082840312156140b5576140b461403d565b5b60006140c38482850161408a565b91505092915050565b60008115159050919050565b6140e1816140cc565b82525050565b60006020820190506140fc60008301846140d8565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561413c578082015181840152602081019050614121565b60008484015250505050565b6000601f19601f8301169050919050565b600061416482614102565b61416e818561410d565b935061417e81856020860161411e565b61418781614148565b840191505092915050565b600060208201905081810360008301526141ac8184614159565b905092915050565b6000819050919050565b6141c7816141b4565b81146141d257600080fd5b50565b6000813590506141e4816141be565b92915050565b600060208284031215614200576141ff61403d565b5b600061420e848285016141d5565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061424282614217565b9050919050565b61425281614237565b82525050565b600060208201905061426d6000830184614249565b92915050565b61427c81614237565b811461428757600080fd5b50565b60008135905061429981614273565b92915050565b600080604083850312156142b6576142b561403d565b5b60006142c48582860161428a565b92505060206142d5858286016141d5565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614314816141b4565b82525050565b600061432582614217565b9050919050565b6143358161431a565b82525050565b614344816140cc565b82525050565b61010082016000820151614361600085018261430b565b506020820151614374602085018261432c565b506040820151614387604085018261432c565b50606082015161439a606085018261432c565b5060808201516143ad608085018261430b565b5060a08201516143c060a085018261430b565b5060c08201516143d360c085018261430b565b5060e08201516143e660e085018261433b565b50505050565b60006143f8838361434a565b6101008301905092915050565b6000602082019050919050565b600061441d826142df565b61442781856142ea565b9350614432836142fb565b8060005b8381101561446357815161444a88826143ec565b975061445583614405565b925050600181019050614436565b5085935050505092915050565b6000602082019050818103600083015261448a8184614412565b905092915050565b6000806000606084860312156144ab576144aa61403d565b5b60006144b98682870161428a565b93505060206144ca8682870161428a565b92505060406144db868287016141d5565b9150509250925092565b6000819050919050565b6144f8816144e5565b811461450357600080fd5b50565b600081359050614515816144ef565b92915050565b600080604083850312156145325761453161403d565b5b600061454085828601614506565b9250506020614551858286016141d5565b9150509250929050565b6000602082840312156145715761457061403d565b5b600061457f8482850161428a565b91505092915050565b6000806040838503121561459f5761459e61403d565b5b60006145ad858286016141d5565b92505060206145be858286016141d5565b9150509250929050565b6145d1816141b4565b82525050565b60006020820190506145ec60008301846145c8565b92915050565b6145fb816144e5565b82525050565b600060208201905061461660008301846145f2565b92915050565b614625816140cc565b811461463057600080fd5b50565b6000813590506146428161461c565b92915050565b6000806040838503121561465f5761465e61403d565b5b600061466d8582860161428a565b925050602061467e85828601614633565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6146ca82614148565b810181811067ffffffffffffffff821117156146e9576146e8614692565b5b80604052505050565b60006146fc614033565b905061470882826146c1565b919050565b600067ffffffffffffffff82111561472857614727614692565b5b61473182614148565b9050602081019050919050565b82818337600083830152505050565b600061476061475b8461470d565b6146f2565b90508281526020810184848401111561477c5761477b61468d565b5b61478784828561473e565b509392505050565b600082601f8301126147a4576147a3614688565b5b81356147b484826020860161474d565b91505092915050565b600080600080608085870312156147d7576147d661403d565b5b60006147e58782880161428a565b94505060206147f68782880161428a565b9350506040614807878288016141d5565b925050606085013567ffffffffffffffff81111561482857614827614042565b5b6148348782880161478f565b91505092959194509250565b600067ffffffffffffffff82111561485b5761485a614692565b5b61486482614148565b9050602081019050919050565b600061488461487f84614840565b6146f2565b9050828152602081018484840111156148a05761489f61468d565b5b6148ab84828561473e565b509392505050565b600082601f8301126148c8576148c7614688565b5b81356148d8848260208601614871565b91505092915050565b6000806000606084860312156148fa576148f961403d565b5b600084013567ffffffffffffffff81111561491857614917614042565b5b614924868287016148b3565b9350506020614935868287016141d5565b9250506040614946868287016141d5565b9150509250925092565b600080604083850312156149675761496661403d565b5b60006149758582860161428a565b92505060206149868582860161428a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806149d757607f821691505b6020821081036149ea576149e9614990565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000614a4c60218361410d565b9150614a57826149f0565b604082019050919050565b60006020820190508181036000830152614a7b81614a3f565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000614ade603d8361410d565b9150614ae982614a82565b604082019050919050565b60006020820190508181036000830152614b0d81614ad1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614b4e826141b4565b9150614b59836141b4565b9250828201905080821115614b7157614b70614b14565b5b92915050565b6000614b82826141b4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614bb457614bb3614b14565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000614c4a602d8361410d565b9150614c5582614bee565b604082019050919050565b60006020820190508181036000830152614c7981614c3d565b9050919050565b7f5375626d6974746564207072696365206e6f7420657175616c20746f204e465460008201527f2070726963652e00000000000000000000000000000000000000000000000000602082015250565b6000614cdc60278361410d565b9150614ce782614c80565b604082019050919050565b60006020820190508181036000830152614d0b81614ccf565b9050919050565b6000614d1d826141b4565b9150614d28836141b4565b9250828203905081811115614d4057614d3f614b14565b5b92915050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000614da260288361410d565b9150614dad82614d46565b604082019050919050565b60006020820190508181036000830152614dd181614d95565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000614e0e60188361410d565b9150614e1982614dd8565b602082019050919050565b60006020820190508181036000830152614e3d81614e01565b9050919050565b7f596f7520617265206e6f74206f776e6572206f662074686973204e4654000000600082015250565b6000614e7a601d8361410d565b9150614e8582614e44565b602082019050919050565b60006020820190508181036000830152614ea981614e6d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000614f0c60298361410d565b9150614f1782614eb0565b604082019050919050565b60006020820190508181036000830152614f3b81614eff565b9050919050565b7f53616c65207072696365206973206c657373207468616e20302e31204d41544960008201527f4300000000000000000000000000000000000000000000000000000000000000602082015250565b6000614f9e60218361410d565b9150614fa982614f42565b604082019050919050565b60006020820190508181036000830152614fcd81614f91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061500e826141b4565b9150615019836141b4565b92508261502957615028614fd4565b5b828204905092915050565b600061503f826141b4565b915061504a836141b4565b9250828202615058816141b4565b9150828204841483151761506f5761506e614b14565b5b5092915050565b600081905092915050565b600061508c82614102565b6150968185615076565b93506150a681856020860161411e565b80840191505092915050565b60006150be8285615081565b91506150ca8284615081565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061513260258361410d565b915061513d826150d6565b604082019050919050565b6000602082019050818103600083015261516181615125565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006151c460248361410d565b91506151cf82615168565b604082019050919050565b600060208201905081810360008301526151f3816151b7565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000615230601b8361410d565b915061523b826151fa565b602082019050919050565b6000602082019050818103600083015261525f81615223565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061529c60198361410d565b91506152a782615266565b602082019050919050565b600060208201905081810360008301526152cb8161528f565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061532e60328361410d565b9150615339826152d2565b604082019050919050565b6000602082019050818103600083015261535d81615321565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061539a60208361410d565b91506153a582615364565b602082019050919050565b600060208201905081810360008301526153c98161538d565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615406601c8361410d565b9150615411826153d0565b602082019050919050565b60006020820190508181036000830152615435816153f9565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000615498602e8361410d565b91506154a38261543c565b604082019050919050565b600060208201905081810360008301526154c78161548b565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026155307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826154f3565b61553a86836154f3565b95508019841693508086168417925050509392505050565b6000819050919050565b600061557761557261556d846141b4565b615552565b6141b4565b9050919050565b6000819050919050565b6155918361555c565b6155a561559d8261557e565b848454615500565b825550505050565b600090565b6155ba6155ad565b6155c5818484615588565b505050565b5b818110156155e9576155de6000826155b2565b6001810190506155cb565b5050565b601f82111561562e576155ff816154ce565b615608846154e3565b81016020851015615617578190505b61562b615623856154e3565b8301826155ca565b50505b505050565b600082821c905092915050565b600061565160001984600802615633565b1980831691505092915050565b600061566a8383615640565b9150826002028217905092915050565b61568382614102565b67ffffffffffffffff81111561569c5761569b614692565b5b6156a682546149bf565b6156b18282856155ed565b600060209050601f8311600181146156e457600084156156d2578287015190505b6156dc858261565e565b865550615744565b601f1984166156f2866154ce565b60005b8281101561571a578489015182556001820191506020850194506020810190506156f5565b868310156157375784890151615733601f891682615640565b8355505b6001600288020188555050505b505050505050565b7f50726963652063616e2774206265207a65726f2e000000000000000000000000600082015250565b600061578260148361410d565b915061578d8261574c565b602082019050919050565b600060208201905081810360008301526157b181615775565b9050919050565b6157c18161431a565b82525050565b600060c0820190506157dc60008301896157b8565b6157e960208301886157b8565b6157f660408301876157b8565b61580360608301866145c8565b61581060808301856145c8565b61581d60a08301846140d8565b979650505050505050565b6000819050919050565b600061583d82615828565b915061584883615828565b925082820390508181126000841216828213600085121516171561586f5761586e614b14565b5b92915050565b61587e81614047565b82525050565b600081519050919050565b600082825260208201905092915050565b60006158ab82615884565b6158b5818561588f565b93506158c581856020860161411e565b6158ce81614148565b840191505092915050565b6000610100820190506158ef600083018b614249565b6158fc602083018a6145c8565b61590960408301896145f2565b6159166060830188614249565b6159236080830187615875565b61593060a08301866145c8565b61593d60c08301856145c8565b81810360e083015261594f81846158a0565b90509998505050505050505050565b60006080820190506159736000830187614249565b6159806020830186614249565b61598d60408301856145c8565b818103606083015261599f81846158a0565b905095945050505050565b6000815190506159b981614073565b92915050565b6000602082840312156159d5576159d461403d565b5b60006159e3848285016159aa565b91505092915050565b60006159f7826141b4565b9150615a02836141b4565b925082615a1257615a11614fd4565b5b828206905092915050565b6000615a38615a33615a2e84614217565b615552565b614217565b9050919050565b6000615a4a82615a1d565b9050919050565b6000615a5c82615a3f565b9050919050565b60008160601b9050919050565b6000615a7b82615a63565b9050919050565b6000615a8d82615a70565b9050919050565b615aa5615aa082615a51565b615a82565b82525050565b6000819050919050565b615ac6615ac1826141b4565b615aab565b82525050565b6000615ad88285615a94565b601482019150615ae88284615ab5565b6020820191508190509392505050565b6000606082019050615b0d6000830186614249565b615b1a60208301856145c8565b8181036040830152615b2c81846158a0565b9050949350505050565b600081519050615b458161461c565b92915050565b600060208284031215615b6157615b6061403d565b5b6000615b6f84828501615b36565b91505092915050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000615bd460238361410d565b9150615bdf82615b78565b604082019050919050565b60006020820190508181036000830152615c0381615bc7565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115615c6157808604811115615c3d57615c3c614b14565b5b6001851615615c4c5780820291505b8081029050615c5a85615c0a565b9450615c21565b94509492505050565b600082615c7a5760019050615d36565b81615c885760009050615d36565b8160018114615c9e5760028114615ca857615cd7565b6001915050615d36565b60ff841115615cba57615cb9614b14565b5b8360020a915084821115615cd157615cd0614b14565b5b50615d36565b5060208310610133831016604e8410600b8410161715615d0c5782820a905083811115615d0757615d06614b14565b5b615d36565b615d198484846001615c17565b92509050818404811115615d3057615d2f614b14565b5b81810290505b9392505050565b6000615d48826141b4565b9150615d53836141b4565b9250615d807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484615c6a565b90509291505056fe68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d4d41544943267473796d733d5553442c4a50592c455552266170695f6b65793d7b613064333165666461636561366137393734646164613262373931613961303865366237366136323563363864373433323861366236643565363639303931387da264697066735822122070707273777e8b1fdc9ef615651d59ea63a9815bfdb5d24579e9095289de259164736f6c63430008110033",
  "deployedBytecode": "0x6080604052600436106101b75760003560e01c80636b0f8b04116100ec578063a22cb4651161008a578063bec2a7c511610064578063bec2a7c51461060b578063c87b56dd1461063b578063ce1b815f14610678578063e985e9c5146106a3576101b7565b8063a22cb4651461057c578063b6342bb4146105a5578063b88d4fde146105e2576101b7565b806377e58703116100c657806377e58703146104cb57806386d6fdb51461050857806395d89b4114610526578063a0dd94dc14610551576101b7565b80636b0f8b04146104475780636b1597661461046357806370a082311461048e576101b7565b8063243adbdd116101595780634357855e116101335780634357855e14610379578063486ff0cd146103a2578063572b6c05146103cd5780636352211e1461040a576101b7565b8063243adbdd146103095780633143ec871461032557806342842e0e14610350576101b7565b8063095ea7b311610195578063095ea7b31461026157806315a70d8d1461028a578063202e3740146102b557806323b872dd146102e0576101b7565b806301ffc9a7146101bc57806306fdde03146101f9578063081812fc14610224575b600080fd5b3480156101c857600080fd5b506101e360048036038101906101de919061409f565b6106e0565b6040516101f091906140e7565b60405180910390f35b34801561020557600080fd5b5061020e6107c2565b60405161021b9190614192565b60405180910390f35b34801561023057600080fd5b5061024b600480360381019061024691906141ea565b610854565b6040516102589190614258565b60405180910390f35b34801561026d57600080fd5b506102886004803603810190610283919061429f565b61089a565b005b34801561029657600080fd5b5061029f6109b1565b6040516102ac9190614470565b60405180910390f35b3480156102c157600080fd5b506102ca610d14565b6040516102d79190614470565b60405180910390f35b3480156102ec57600080fd5b5061030760048036038101906103029190614492565b611077565b005b610323600480360381019061031e91906141ea565b6110d7565b005b34801561033157600080fd5b5061033a61156d565b6040516103479190614470565b60405180910390f35b34801561035c57600080fd5b5061037760048036038101906103729190614492565b61183f565b005b34801561038557600080fd5b506103a0600480360381019061039b919061451b565b61185f565b005b3480156103ae57600080fd5b506103b7611970565b6040516103c49190614192565b60405180910390f35b3480156103d957600080fd5b506103f460048036038101906103ef919061455b565b6119fe565b60405161040191906140e7565b60405180910390f35b34801561041657600080fd5b50610431600480360381019061042c91906141ea565b611a58565b60405161043e9190614258565b60405180910390f35b610461600480360381019061045c9190614588565b611ade565b005b34801561046f57600080fd5b50610478611ca4565b60405161048591906145d7565b60405180910390f35b34801561049a57600080fd5b506104b560048036038101906104b0919061455b565b611cac565b6040516104c291906145d7565b60405180910390f35b3480156104d757600080fd5b506104f260048036038101906104ed9190614588565b611d63565b6040516104ff91906145d7565b60405180910390f35b610510611dd0565b60405161051d9190614601565b60405180910390f35b34801561053257600080fd5b5061053b611f34565b6040516105489190614192565b60405180910390f35b34801561055d57600080fd5b50610566611fc6565b60405161057391906145d7565b60405180910390f35b34801561058857600080fd5b506105a3600480360381019061059e9190614648565b611fcc565b005b3480156105b157600080fd5b506105cc60048036038101906105c791906141ea565b611fe2565b6040516105d991906145d7565b60405180910390f35b3480156105ee57600080fd5b50610609600480360381019061060491906147bd565b612050565b005b610625600480360381019061062091906148e1565b6120b2565b60405161063291906145d7565b60405180910390f35b34801561064757600080fd5b50610662600480360381019061065d91906141ea565b612100565b60405161066f9190614192565b60405180910390f35b34801561068457600080fd5b5061068d612212565b60405161069a9190614258565b60405180910390f35b3480156106af57600080fd5b506106ca60048036038101906106c59190614950565b61223c565b6040516106d791906140e7565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107ab57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806107bb57506107ba82612307565b5b9050919050565b6060600080546107d1906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546107fd906149bf565b801561084a5780601f1061081f5761010080835404028352916020019161084a565b820191906000526020600020905b81548152906001019060200180831161082d57829003601f168201915b5050505050905090565b600061085f82612371565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006108a582611a58565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c90614a62565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166109346123bc565b73ffffffffffffffffffffffffffffffffffffffff16148061096357506109628161095d6123bc565b61223c565b5b6109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099990614af4565b60405180910390fd5b6109ac83836123cb565b505050565b606060006109bf6010612484565b905060008060005b83811015610a6d576109d76123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e60006001846109fe9190614b43565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a5a578280610a5690614b77565b9350505b8080610a6590614b77565b9150506109c7565b5060008267ffffffffffffffff811115610a8a57610a89614692565b5b604051908082528060200260200182016040528015610ac357816020015b610ab0613f23565b815260200190600190039081610aa85790505b50905060005b84811015610d0957610ad96123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e6000600184610b009190614b43565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610cf6576000600182610b5c9190614b43565b90506000600e600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050848681518110610cda57610cd9614bbf565b5b60200260200101819052508480610cf090614b77565b95505050505b8080610d0190614b77565b915050610ac9565b508094505050505090565b60606000610d226010612484565b905060008060005b83811015610dd057610d3a6123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e6000600184610d619190614b43565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610dbd578280610db990614b77565b9350505b8080610dc890614b77565b915050610d2a565b5060008267ffffffffffffffff811115610ded57610dec614692565b5b604051908082528060200260200182016040528015610e2657816020015b610e13613f23565b815260200190600190039081610e0b5790505b50905060005b8481101561106c57610e3c6123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e6000600184610e639190614b43565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611059576000600182610ebf9190614b43565b90506000600e600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505084868151811061103d5761103c614bbf565b5b6020026020010181905250848061105390614b77565b95505050505b808061106490614b77565b915050610e2c565b508094505050505090565b6110886110826123bc565b82612492565b6110c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110be90614c60565b60405180910390fd5b6110d2838383612527565b505050565b6000600e60008381526020019081526020016000206004015490506000600e60008481526020019081526020016000206005015490506000600e600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600e600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508334146111c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bc90614cf2565b60405180910390fd5b6111cd6123bc565b600e600087815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600e600087815260200190815260200160002060070160006101000a81548160ff0219169083151502179055506000600e600087815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506112b06011612820565b6112c2306112bc6123bc565b87612527565b600e600086815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600e600087815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361143557600061136c85611fe2565b90506000813461137c9190614d12565b9050600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156113e6573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561142d573d6000803e3d6000fd5b505050611566565b600061144085611fe2565b9050600061144e8686611d63565b90506000818361145e9190614b43565b346114699190614d12565b90508373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156114b1573d6000803e3d6000fd5b50600f60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505015801561151a573d6000803e3d6000fd5b508473ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611561573d6000803e3d6000fd5b505050505b5050505050565b6060600061157b6010612484565b905060006115896011612484565b6115936010612484565b61159d9190614d12565b90506000808267ffffffffffffffff8111156115bc576115bb614692565b5b6040519080825280602002602001820160405280156115f557816020015b6115e2613f23565b8152602001906001900390816115da5790505b50905060005b84811015611834573073ffffffffffffffffffffffffffffffffffffffff16600e600060018461162b9190614b43565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036118215760006001826116879190614b43565b90506000600e600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820154815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505084868151811061180557611804614bbf565b5b6020026020010181905250848061181b90614b77565b95505050505b808061182c90614b77565b9150506115fb565b508094505050505090565b61185a83838360405180602001604052806000815250612050565b505050565b81600c600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f890614db8565b60405180910390fd5b600c600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281601481905550505050565b6015805461197d906149bf565b80601f01602080910402602001604051908101604052809291908181526020018280546119a9906149bf565b80156119f65780601f106119cb576101008083540402835291602001916119f6565b820191906000526020600020905b8154815290600101906020018083116119d957829003601f168201915b505050505081565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600080611a6483612836565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ad5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611acc90614e24565b60405180910390fd5b80915050919050565b611ae66123bc565b73ffffffffffffffffffffffffffffffffffffffff16600e600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8090614e90565b60405180910390fd5b30600e600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600e600084815260200190815260200160002060070160006101000a81548160ff021916908315150217905550611c156123bc565b600e600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600e600084815260200190815260200160002060040181905550611c8e6011612873565b611ca0611c996123bc565b3084612527565b5050565b600047905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611d1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d1390614f22565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600067016345785d8a00008311611daf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611da690614fb4565b60405180910390fd5b8161271084611dbe9190615003565b611dc89190615034565b905092915050565b600080611de760125430634357855e60e01b6128cf565b9050611e4b6040518060400160405280600381526020017f67657400000000000000000000000000000000000000000000000000000000008152506040518060c0016040528060948152602001615d8960949139836129009092919063ffffffff16565b611eca6040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5553440000000000000000000000000000000000000000000000000000000000815250836129009092919063ffffffff16565b6000670de0b6b3a76400009050611f216040518060400160405280600581526020017f74696d657300000000000000000000000000000000000000000000000000000081525082846129339092919063ffffffff16565b611f2d82601354612966565b9250505090565b606060018054611f43906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6f906149bf565b8015611fbc5780601f10611f9157610100808354040283529160200191611fbc565b820191906000526020600020905b815481529060010190602001808311611f9f57829003601f168201915b5050505050905090565b60145481565b611fde611fd76123bc565b838361299d565b5050565b600067016345785d8a0000821161202e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161202590614fb4565b60405180910390fd5b61012c6127108361203f9190615003565b6120499190615034565b9050919050565b61206161205b6123bc565b83612492565b6120a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209790614c60565b60405180910390fd5b6120ac84848484612b09565b50505050565b60006120be6010612820565b60006120ca6010612484565b90506120dd6120d76123bc565b82612b65565b6120e78186612d82565b6120f5818585601454612def565b809150509392505050565b606061210b82612371565b600060066000848152602001908152602001600020805461212b906149bf565b80601f0160208091040260200160405190810160405280929190818152602001828054612157906149bf565b80156121a45780601f10612179576101008083540402835291602001916121a4565b820191906000526020600020905b81548152906001019060200180831161218757829003601f168201915b5050505050905060006121b561303b565b905060008151036121ca57819250505061220d565b6000825111156121ff5780826040516020016121e79291906150b2565b6040516020818303038152906040529250505061220d565b61220884613052565b925050505b919050565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600060146000369050101580156122ec57506122eb336119fe565b5b1561230057601436033560601c9050612304565b3390505b90565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61237a816130ba565b6123b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123b090614e24565b60405180910390fd5b50565b60006123c66122d0565b905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661243e83611a58565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b60008061249e83611a58565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806124e057506124df818561223c565b5b8061251e57508373ffffffffffffffffffffffffffffffffffffffff1661250684610854565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661254782611a58565b73ffffffffffffffffffffffffffffffffffffffff161461259d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161259490615148565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361260c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612603906151da565b60405180910390fd5b61261983838360016130fb565b8273ffffffffffffffffffffffffffffffffffffffff1661263982611a58565b73ffffffffffffffffffffffffffffffffffffffff161461268f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161268690615148565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461281b8383836001613221565b505050565b6001816000016000828254019250508190555050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600081600001549050600081116128bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b690615246565b60405180910390fd5b6001810382600001819055505050565b6128d7613fac565b6128df613fac565b6128f685858584613227909392919063ffffffff16565b9150509392505050565b6129178284608001516132d790919063ffffffff16565b61292e8184608001516132d790919063ffffffff16565b505050565b61294a8284608001516132d790919063ffffffff16565b6129618184608001516132fc90919063ffffffff16565b505050565b6000612995600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846133a9565b905092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a02906152b2565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612afc91906140e7565b60405180910390a3505050565b612b14848484612527565b612b2084848484613475565b612b5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b5690615344565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612bd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bcb906153b0565b60405180910390fd5b612bdd816130ba565b15612c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c149061541c565b60405180910390fd5b612c2b6000838360016130fb565b612c34816130ba565b15612c74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c6b9061541c565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612d7e600083836001613221565b5050565b612d8b826130ba565b612dca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dc1906154ae565b60405180910390fd5b80600660008481526020019081526020016000209081612dea919061567a565b505050565b60008311612e32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e2990615798565b60405180910390fd5b612e3a611dd0565b5083600e60008681526020019081526020016000206000018190555082600e60008681526020019081526020016000206004018190555081600e600086815260200190815260200160002060050181905550670de0b6b3a76400008184612ea19190615034565b612eab9190615003565b600e600086815260200190815260200160002060060181905550612ecd6123bc565b600e600086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600e600086815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612f7e6123bc565b600e600086815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612fe4612fdd6123bc565b3086612527565b837f57bc5db4260382b0aa84042772478b244fd59a2fa4988fcc77e2d7c0d09dec7061300e6123bc565b306130176123bc565b8787600060405161302d969594939291906157c7565b60405180910390a250505050565b606060405180602001604052806000815250905090565b606061305d82612371565b600061306761303b565b9050600081511161308757604051806020016040528060008152506130b2565b80613091846135fc565b6040516020016130a29291906150b2565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166130dc83612836565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561321b57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461318f5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546131879190614d12565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461321a5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546132129190614b43565b925050819055505b5b50505050565b50505050565b61322f613fac565b61323f85608001516101006136ca565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6132e48260038351613734565b6132f781836138b990919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008112156133335761332e82826138db565b6133a5565b67ffffffffffffffff8113156133525761334d8282613952565b6133a4565b6000811261336b5761336682600083613734565b6133a3565b6133a2826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61339d9190615832565b613734565b5b5b5b5050565b600080600b5490506001816133be9190614b43565b600b819055506000634042994660e01b60008087600001513089604001518760018c60800151600001516040516024016133ff9897969594939291906158d9565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905061346a8683868461399e565b925050509392505050565b60006134968473ffffffffffffffffffffffffffffffffffffffff16613b33565b156135ef578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026134bf6123bc565b8786866040518563ffffffff1660e01b81526004016134e1949392919061595e565b6020604051808303816000875af192505050801561351d57506040513d601f19601f8201168201806040525081019061351a91906159bf565b60015b61359f573d806000811461354d576040519150601f19603f3d011682016040523d82523d6000602084013e613552565b606091505b506000815103613597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161358e90615344565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506135f4565b600190505b949350505050565b60606000600161360b84613b56565b01905060008167ffffffffffffffff81111561362a57613629614692565b5b6040519080825280601f01601f19166020018201604052801561365c5781602001600182028036833780820191505090505b509050600082602001820190505b6001156136bf578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816136b3576136b2614fd4565b5b0494506000850361366a575b819350505050919050565b6136d2614019565b60006020836136e191906159ec565b1461370d576020826136f391906159ec565b60206136ff9190614d12565b8261370a9190614b43565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff161161376b576137658160058460ff16901b60ff161784613ca990919063ffffffff16565b506138b4565b60ff8167ffffffffffffffff16116137c15761379a601860058460ff16901b1784613ca990919063ffffffff16565b506137bb8167ffffffffffffffff16600185613cc99092919063ffffffff16565b506138b3565b61ffff8167ffffffffffffffff1611613818576137f1601960058460ff16901b1784613ca990919063ffffffff16565b506138128167ffffffffffffffff16600285613cc99092919063ffffffff16565b506138b2565b63ffffffff8167ffffffffffffffff16116138715761384a601a60058460ff16901b1784613ca990919063ffffffff16565b5061386b8167ffffffffffffffff16600485613cc99092919063ffffffff16565b506138b1565b61388e601b60058460ff16901b1784613ca990919063ffffffff16565b506138af8167ffffffffffffffff16600885613cc99092919063ffffffff16565b505b5b5b5b505050565b6138c1614019565b6138d383846000015151848551613ceb565b905092915050565b6138f960036005600660ff16901b1783613ca990919063ffffffff16565b5061394e82827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61392a9190615832565b60405160200161393a91906145d7565b604051602081830303815290604052613dda565b5050565b61397060026005600660ff16901b1783613ca990919063ffffffff16565b5061399a828260405160200161398691906145d7565b604051602081830303815290604052613dda565b5050565b600030846040516020016139b3929190615acc565b60405160208183030381529060405280519060200120905084600c600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b8152600401613aa993929190615af8565b6020604051808303816000875af1158015613ac8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613aec9190615b4b565b613b2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613b2290615bea565b60405180910390fd5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613bb4577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381613baa57613ba9614fd4565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310613bf1576d04ee2d6d415b85acef81000000008381613be757613be6614fd4565b5b0492506020810190505b662386f26fc100008310613c2057662386f26fc100008381613c1657613c15614fd4565b5b0492506010810190505b6305f5e1008310613c49576305f5e1008381613c3f57613c3e614fd4565b5b0492506008810190505b6127108310613c6e576127108381613c6457613c63614fd4565b5b0492506004810190505b60648310613c915760648381613c8757613c86614fd4565b5b0492506002810190505b600a8310613ca0576001810190505b80915050919050565b613cb1614019565b613cc18384600001515184613dff565b905092915050565b613cd1614019565b613ce2848560000151518585613e55565b90509392505050565b613cf3614019565b8251821115613d0157600080fd5b84602001518285613d129190614b43565b1115613d4757613d46856002613d3788602001518887613d329190614b43565b613ee3565b613d419190615034565b613eff565b5b600080865180518760208301019350808887011115613d665787860182525b60208701925050505b60208410613dad5780518252602082613d889190614b43565b9150602081613d979190614b43565b9050602084613da69190614d12565b9350613d6f565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b613de78260028351613734565b613dfa81836138b990919063ffffffff16565b505050565b613e07614019565b83602001518310613e2d57613e2c8460028660200151613e279190615034565b613eff565b5b83518051602085830101848153818603613e48576001820183525b5050508390509392505050565b613e5d614019565b84602001518483613e6e9190614b43565b1115613e9657613e958560028685613e869190614b43565b613e909190615034565b613eff565b5b6000600183610100613ea89190615d3d565b613eb29190614d12565b90508551838682010185831982511617815281518588011115613ed55784870182525b505085915050949350505050565b600081831115613ef557829050613ef9565b8190505b92915050565b600082600001519050613f1283836136ca565b50613f1d83826138b9565b50505050565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000151581525090565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001614013614019565b81525090565b604051806040016040528060608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61407c81614047565b811461408757600080fd5b50565b60008135905061409981614073565b92915050565b6000602082840312156140b5576140b461403d565b5b60006140c38482850161408a565b91505092915050565b60008115159050919050565b6140e1816140cc565b82525050565b60006020820190506140fc60008301846140d8565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561413c578082015181840152602081019050614121565b60008484015250505050565b6000601f19601f8301169050919050565b600061416482614102565b61416e818561410d565b935061417e81856020860161411e565b61418781614148565b840191505092915050565b600060208201905081810360008301526141ac8184614159565b905092915050565b6000819050919050565b6141c7816141b4565b81146141d257600080fd5b50565b6000813590506141e4816141be565b92915050565b600060208284031215614200576141ff61403d565b5b600061420e848285016141d5565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061424282614217565b9050919050565b61425281614237565b82525050565b600060208201905061426d6000830184614249565b92915050565b61427c81614237565b811461428757600080fd5b50565b60008135905061429981614273565b92915050565b600080604083850312156142b6576142b561403d565b5b60006142c48582860161428a565b92505060206142d5858286016141d5565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614314816141b4565b82525050565b600061432582614217565b9050919050565b6143358161431a565b82525050565b614344816140cc565b82525050565b61010082016000820151614361600085018261430b565b506020820151614374602085018261432c565b506040820151614387604085018261432c565b50606082015161439a606085018261432c565b5060808201516143ad608085018261430b565b5060a08201516143c060a085018261430b565b5060c08201516143d360c085018261430b565b5060e08201516143e660e085018261433b565b50505050565b60006143f8838361434a565b6101008301905092915050565b6000602082019050919050565b600061441d826142df565b61442781856142ea565b9350614432836142fb565b8060005b8381101561446357815161444a88826143ec565b975061445583614405565b925050600181019050614436565b5085935050505092915050565b6000602082019050818103600083015261448a8184614412565b905092915050565b6000806000606084860312156144ab576144aa61403d565b5b60006144b98682870161428a565b93505060206144ca8682870161428a565b92505060406144db868287016141d5565b9150509250925092565b6000819050919050565b6144f8816144e5565b811461450357600080fd5b50565b600081359050614515816144ef565b92915050565b600080604083850312156145325761453161403d565b5b600061454085828601614506565b9250506020614551858286016141d5565b9150509250929050565b6000602082840312156145715761457061403d565b5b600061457f8482850161428a565b91505092915050565b6000806040838503121561459f5761459e61403d565b5b60006145ad858286016141d5565b92505060206145be858286016141d5565b9150509250929050565b6145d1816141b4565b82525050565b60006020820190506145ec60008301846145c8565b92915050565b6145fb816144e5565b82525050565b600060208201905061461660008301846145f2565b92915050565b614625816140cc565b811461463057600080fd5b50565b6000813590506146428161461c565b92915050565b6000806040838503121561465f5761465e61403d565b5b600061466d8582860161428a565b925050602061467e85828601614633565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6146ca82614148565b810181811067ffffffffffffffff821117156146e9576146e8614692565b5b80604052505050565b60006146fc614033565b905061470882826146c1565b919050565b600067ffffffffffffffff82111561472857614727614692565b5b61473182614148565b9050602081019050919050565b82818337600083830152505050565b600061476061475b8461470d565b6146f2565b90508281526020810184848401111561477c5761477b61468d565b5b61478784828561473e565b509392505050565b600082601f8301126147a4576147a3614688565b5b81356147b484826020860161474d565b91505092915050565b600080600080608085870312156147d7576147d661403d565b5b60006147e58782880161428a565b94505060206147f68782880161428a565b9350506040614807878288016141d5565b925050606085013567ffffffffffffffff81111561482857614827614042565b5b6148348782880161478f565b91505092959194509250565b600067ffffffffffffffff82111561485b5761485a614692565b5b61486482614148565b9050602081019050919050565b600061488461487f84614840565b6146f2565b9050828152602081018484840111156148a05761489f61468d565b5b6148ab84828561473e565b509392505050565b600082601f8301126148c8576148c7614688565b5b81356148d8848260208601614871565b91505092915050565b6000806000606084860312156148fa576148f961403d565b5b600084013567ffffffffffffffff81111561491857614917614042565b5b614924868287016148b3565b9350506020614935868287016141d5565b9250506040614946868287016141d5565b9150509250925092565b600080604083850312156149675761496661403d565b5b60006149758582860161428a565b92505060206149868582860161428a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806149d757607f821691505b6020821081036149ea576149e9614990565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000614a4c60218361410d565b9150614a57826149f0565b604082019050919050565b60006020820190508181036000830152614a7b81614a3f565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000614ade603d8361410d565b9150614ae982614a82565b604082019050919050565b60006020820190508181036000830152614b0d81614ad1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614b4e826141b4565b9150614b59836141b4565b9250828201905080821115614b7157614b70614b14565b5b92915050565b6000614b82826141b4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614bb457614bb3614b14565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000614c4a602d8361410d565b9150614c5582614bee565b604082019050919050565b60006020820190508181036000830152614c7981614c3d565b9050919050565b7f5375626d6974746564207072696365206e6f7420657175616c20746f204e465460008201527f2070726963652e00000000000000000000000000000000000000000000000000602082015250565b6000614cdc60278361410d565b9150614ce782614c80565b604082019050919050565b60006020820190508181036000830152614d0b81614ccf565b9050919050565b6000614d1d826141b4565b9150614d28836141b4565b9250828203905081811115614d4057614d3f614b14565b5b92915050565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b6000614da260288361410d565b9150614dad82614d46565b604082019050919050565b60006020820190508181036000830152614dd181614d95565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000614e0e60188361410d565b9150614e1982614dd8565b602082019050919050565b60006020820190508181036000830152614e3d81614e01565b9050919050565b7f596f7520617265206e6f74206f776e6572206f662074686973204e4654000000600082015250565b6000614e7a601d8361410d565b9150614e8582614e44565b602082019050919050565b60006020820190508181036000830152614ea981614e6d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000614f0c60298361410d565b9150614f1782614eb0565b604082019050919050565b60006020820190508181036000830152614f3b81614eff565b9050919050565b7f53616c65207072696365206973206c657373207468616e20302e31204d41544960008201527f4300000000000000000000000000000000000000000000000000000000000000602082015250565b6000614f9e60218361410d565b9150614fa982614f42565b604082019050919050565b60006020820190508181036000830152614fcd81614f91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061500e826141b4565b9150615019836141b4565b92508261502957615028614fd4565b5b828204905092915050565b600061503f826141b4565b915061504a836141b4565b9250828202615058816141b4565b9150828204841483151761506f5761506e614b14565b5b5092915050565b600081905092915050565b600061508c82614102565b6150968185615076565b93506150a681856020860161411e565b80840191505092915050565b60006150be8285615081565b91506150ca8284615081565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061513260258361410d565b915061513d826150d6565b604082019050919050565b6000602082019050818103600083015261516181615125565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006151c460248361410d565b91506151cf82615168565b604082019050919050565b600060208201905081810360008301526151f3816151b7565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000615230601b8361410d565b915061523b826151fa565b602082019050919050565b6000602082019050818103600083015261525f81615223565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061529c60198361410d565b91506152a782615266565b602082019050919050565b600060208201905081810360008301526152cb8161528f565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061532e60328361410d565b9150615339826152d2565b604082019050919050565b6000602082019050818103600083015261535d81615321565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061539a60208361410d565b91506153a582615364565b602082019050919050565b600060208201905081810360008301526153c98161538d565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615406601c8361410d565b9150615411826153d0565b602082019050919050565b60006020820190508181036000830152615435816153f9565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000615498602e8361410d565b91506154a38261543c565b604082019050919050565b600060208201905081810360008301526154c78161548b565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026155307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826154f3565b61553a86836154f3565b95508019841693508086168417925050509392505050565b6000819050919050565b600061557761557261556d846141b4565b615552565b6141b4565b9050919050565b6000819050919050565b6155918361555c565b6155a561559d8261557e565b848454615500565b825550505050565b600090565b6155ba6155ad565b6155c5818484615588565b505050565b5b818110156155e9576155de6000826155b2565b6001810190506155cb565b5050565b601f82111561562e576155ff816154ce565b615608846154e3565b81016020851015615617578190505b61562b615623856154e3565b8301826155ca565b50505b505050565b600082821c905092915050565b600061565160001984600802615633565b1980831691505092915050565b600061566a8383615640565b9150826002028217905092915050565b61568382614102565b67ffffffffffffffff81111561569c5761569b614692565b5b6156a682546149bf565b6156b18282856155ed565b600060209050601f8311600181146156e457600084156156d2578287015190505b6156dc858261565e565b865550615744565b601f1984166156f2866154ce565b60005b8281101561571a578489015182556001820191506020850194506020810190506156f5565b868310156157375784890151615733601f891682615640565b8355505b6001600288020188555050505b505050505050565b7f50726963652063616e2774206265207a65726f2e000000000000000000000000600082015250565b600061578260148361410d565b915061578d8261574c565b602082019050919050565b600060208201905081810360008301526157b181615775565b9050919050565b6157c18161431a565b82525050565b600060c0820190506157dc60008301896157b8565b6157e960208301886157b8565b6157f660408301876157b8565b61580360608301866145c8565b61581060808301856145c8565b61581d60a08301846140d8565b979650505050505050565b6000819050919050565b600061583d82615828565b915061584883615828565b925082820390508181126000841216828213600085121516171561586f5761586e614b14565b5b92915050565b61587e81614047565b82525050565b600081519050919050565b600082825260208201905092915050565b60006158ab82615884565b6158b5818561588f565b93506158c581856020860161411e565b6158ce81614148565b840191505092915050565b6000610100820190506158ef600083018b614249565b6158fc602083018a6145c8565b61590960408301896145f2565b6159166060830188614249565b6159236080830187615875565b61593060a08301866145c8565b61593d60c08301856145c8565b81810360e083015261594f81846158a0565b90509998505050505050505050565b60006080820190506159736000830187614249565b6159806020830186614249565b61598d60408301856145c8565b818103606083015261599f81846158a0565b905095945050505050565b6000815190506159b981614073565b92915050565b6000602082840312156159d5576159d461403d565b5b60006159e3848285016159aa565b91505092915050565b60006159f7826141b4565b9150615a02836141b4565b925082615a1257615a11614fd4565b5b828206905092915050565b6000615a38615a33615a2e84614217565b615552565b614217565b9050919050565b6000615a4a82615a1d565b9050919050565b6000615a5c82615a3f565b9050919050565b60008160601b9050919050565b6000615a7b82615a63565b9050919050565b6000615a8d82615a70565b9050919050565b615aa5615aa082615a51565b615a82565b82525050565b6000819050919050565b615ac6615ac1826141b4565b615aab565b82525050565b6000615ad88285615a94565b601482019150615ae88284615ab5565b6020820191508190509392505050565b6000606082019050615b0d6000830186614249565b615b1a60208301856145c8565b8181036040830152615b2c81846158a0565b9050949350505050565b600081519050615b458161461c565b92915050565b600060208284031215615b6157615b6061403d565b5b6000615b6f84828501615b36565b91505092915050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b6000615bd460238361410d565b9150615bdf82615b78565b604082019050919050565b60006020820190508181036000830152615c0381615bc7565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115615c6157808604811115615c3d57615c3c614b14565b5b6001851615615c4c5780820291505b8081029050615c5a85615c0a565b9450615c21565b94509492505050565b600082615c7a5760019050615d36565b81615c885760009050615d36565b8160018114615c9e5760028114615ca857615cd7565b6001915050615d36565b60ff841115615cba57615cb9614b14565b5b8360020a915084821115615cd157615cd0614b14565b5b50615d36565b5060208310610133831016604e8410600b8410161715615d0c5782820a905083811115615d0757615d06614b14565b5b615d36565b615d198484846001615c17565b92509050818404811115615d3057615d2f614b14565b5b81810290505b9392505050565b6000615d48826141b4565b9150615d53836141b4565b9250615d807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484615c6a565b90509291505056fe68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d4d41544943267473796d733d5553442c4a50592c455552266170695f6b65793d7b613064333165666461636561366137393734646164613262373931613961303865366237366136323563363864373433323861366236643565363639303931387da264697066735822122070707273777e8b1fdc9ef615651d59ea63a9815bfdb5d24579e9095289de259164736f6c63430008110033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
