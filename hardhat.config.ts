import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";

// Import secrets
const { ALCHEMY_API_KEY, PRIVATE_KEY } = require("./secrets.json");

const config: HardhatUserConfig = {
  solidity: "0.8.20",  // Using your specified version
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: "767D5YCG1Y2YHT6DP9G4RM8N3FIMSF2PAI",
  },
};

export default config;
