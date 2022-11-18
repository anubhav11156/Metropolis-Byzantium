require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "L5y5rMAxy2S29WmJJkgz8x4iCkLzSEoV";

const mumbaiPrivateKey = 'be5390c6a508dd00cc7ceb3e5d4a63af80fcd1c0ea53babafa7b159f9f32f885';

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [mumbaiPrivateKey]
    }
  }
};
