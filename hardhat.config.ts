import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("@nomicfoundation/hardhat-ethers");

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
