import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("@nomicfoundation/hardhat-ethers");

const { alchemyApiKey, mnemonic } = require("./secrets.json");

module.exports = {
  solidity: {
    version: "0.8.20", // Match with your contract version
  },
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
};

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
