require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const alchemyId = process.env.REACT_APP_ALCHEMY_API_KEY;

const deployerPrivateKey = "fsd"

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemyId}`,
      accounts: [deployerPrivateKey]
    }
  }
};
