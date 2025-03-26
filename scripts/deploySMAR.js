const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying Token...");

  // Get deployer address
  const [deployer] = await ethers.getSigners();
  console.log("Deployer Address:", deployer.address);

  // Get contract factory
  const SMAR = await ethers.getContractFactory("SMARToken");

  // Deploy contract
  const smar = await SMAR.deploy();
  await smar.waitForDeployment();

  // Fetch deployed address correctly
  const contractAddress = await smar.getAddress();
  console.log("Token deployed to:", contractAddress);

  if (!contractAddress) {
    console.error("Deployment failed: Address is undefined.");
    return;
  }

  // Wait for confirmations to ensure indexing on Etherscan
  console.log("Waiting for 5 confirmations...");
  await smar.deploymentTransaction().wait(5);

  console.log("Deployment fully confirmed!");
}

main().catch((error) => {
  console.error("Deployment error:", error);
  process.exit(1);
});
