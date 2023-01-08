import { UserFactory } from "nightfall-sdk";

const clientApiUrl = "http://localhost:8080"


// Deposit ERC20 Token to your L2 account
async function makeDeposit(nightfallMnemonic, tokenContractAddress, value) {
  // Prevent default onClick behaviour that refreshes the page
//   e.preventDefault();
  try {
    // Create a user to deposit funds
    const nightUser = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic,
    });
    const tokenErcStandard = 'ERC20';
    // Make a deposit for the user ERC20
    const txReceipts = await nightUser.makeDeposit({
      tokenContractAddress ,
      tokenErcStandard,
      value,
    });
    return txReceipts;
  } catch (error) {
    console.log(error);
  }
}

// transfer ER20 Token from user L2 account to receiver L2 account
async function makeTransfer(e, nightfallMnemonic, tokenContractAddress, value, recipientNightfallAddress) {
  e.preventDefault();

  try {
    // Create a user that will transfer funds
    const nightUser = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic, // of sender's
    });
    
    // Make a transfer to the Nightfall address of the recipient
    const txReceipts = await nightUser.makeTransfer({
      tokenContractAddress,
      value,
      recipientNightfallAddress,
      isOffChain: false,
    });
    return txReceipts;
  } catch (error) {
    console.log(error);
  }
}

// Withdraw a token from L2 back to L1
async function makeWithdrawal(e, nightfallMnemonic, tokenContractAddress, value) {
  e.preventDefault();

  try {
    // Create a user to make a withdrawal
    const nightUser = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic,
    });
    // Make a withdrawal to Layer 1
    const txReceipts = await nightUser.makeWithdrawal({
      tokenContractAddress,
      value,
      recipientEthAddress: nightUser.ethAddress,
      feeWei: "0",
    });
    return txReceipts;
  } catch (error) {
    console.log(error);
  }
}

// Deposit ERC721 NFT from L1 account to L2 account
async function makeDepositERC721(nightfallMnemonic, tokenContractAddress, tokenId) {
 
  try {
    // Create a user to make a deposit
    const nightUser = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic,
    });
    // Make an ERC721 deposit for the user
    const txReceipts = await nightUser.makeDeposit({
        tokenContractAddress,
      tokenId,
    });

    return txReceipts;
  } catch (error) {
    console.log(error);
  }
}

// transfer ER20 Token from user L2 account to receiver L2 account
async function makeTransferERC721(e, nightfallMnemonic, erc721ContractAddress, tokenId, recipientNightfallAddress) {
  e.preventDefault();

  // Create a user that will transfer ERC721
  try {
    const nightfallUserSender = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic,
    });
  

    // Make an ERC721 transfer to the Nightfall address of the recipient
    const txReceipts = await nightfallUserSender.makeTransfer({
      tokenContractAddress: erc721ContractAddress,
      tokenId,
      recipientNightfallAddress,
      isOffChain: false,
    });
    return txReceipts;
  } catch (error) {
    console.log(error);
  }
}

// Withdraw a NFT from L2 back to L1
async function makeWithdrawalERC721(e, nightfallMnemonic, tokenContractAddress, tokenId) {
  e.preventDefault();

  try {
    // Create a user with clientApiUrl and nightfallMnemonic
    const nightUser = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic,
    });
    // Make an ERC721 withdrawal to Layer 1
    const txReceipts = await nightUser.makeWithdrawal({
      tokenContractAddress,
      tokenId,
      recipientEthAddress: nightUser.ethAddress,
      feeWei: "0",
    });
    return txReceipts;
  } catch (error) {
    console.log(error);
  }
}

// returns L2 nightfall balances in wei
async function checkBalances(nightfallMnemonic) {
  try {
    const nightUser = await UserFactory.create({
      clientApiUrl,
      nightfallMnemonic,
    });

    // Check the balances of the current user
    const balance = await nightUser.checkNightfallBalances();
    console.log('bal test inside utils : ', balance);
    if (Object.keys(balance).length) {
      const balanceWei = Object.values(balance)[0][0].balance;
      return balanceWei;
    }
    return 0;
  } catch (error) {
    console.log(error);
  }
}

// this will create user for the first time, if they don't have a mnemonic !IMPORTANT   
async function createUserFirstTime() {
  try {
    const nightUser = await UserFactory.create({
      clientApiUrl,
    });
    return nightUser; // returns new of nightfall account information
  } catch (error) {
    console.log(error);
  }
}


// get nightfall address from user mnemonic
async function getNightFallAccountAddress(nightfallMnemonic) {
    try {
        const nightUser = await UserFactory.create({
            clientApiUrl,
            nightfallMnemonic
        });

        const nightAddress = nightUser.getNightfallAddress();
        return nightAddress;
    } catch (error) {
        console.log(error);
    }
}

async function getMnemonic() {
    try {
        const nightUser = await UserFactory.create({
            clientApiUrl,
        });
        const mnemonic = nightUser.getNightfallMnemonic();
        return mnemonic
    } catch (error) {
        console.log(error);
    }
}

// async function checkClientStatus(){
//     try{
//         const nightUser = await UserFactory.create({
//             clientApiUrl,
//             nightfallMnemonic
//         });

//         const status = await nightUser.checkStatus();
//     }catch (error) {
//         console.log(error);
//     }
// }

export {
  makeDeposit,
  makeTransfer,
  makeWithdrawal,
  makeDepositERC721,
  makeTransferERC721,
  makeWithdrawalERC721,
  createUserFirstTime,
  checkBalances,
  getNightFallAccountAddress,
  getMnemonic,
};