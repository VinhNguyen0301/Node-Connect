# Box Smart Contract Project

## Overview
This project demonstrates the full development lifecycle of a simple smart contract named **Box**. The contract allows the **owner** to:
- **Store a value** (assign a value).
- **Retrieve the value** (read the stored value).

The development flow includes writing, testing, deploying on a local blockchain, and successfully deploying to the Ethereum Sepolia test network. This project showcases essential blockchain development skills, including Solidity, JavaScript, TypeScript, and OpenZeppelin for secure smart contract standards.

## Technologies Used
- **Solidity**: For smart contract development.
- **JavaScript & TypeScript**: For scripting deployment and interactions.
- **OpenZeppelin**: To implement secure contract patterns (e.g., `Ownable`).
- **Hardhat**: For compilation, testing, and deployment.
- **Chai**: For unit testing and assertions.

## Features
- **Store Functionality**: The owner can securely store a value.
- **Retrieve Functionality**: Anyone can retrieve the last stored value.
- **Access Control**: Only the owner has permission to assign values, enforced using OpenZeppelin's `Ownable` contract.

## Development Workflow
1. **Smart Contract Creation**: Wrote the `Box.sol` smart contract with the following:
   - `store(uint256 value)`: Allows the owner to store a new value.
   - `retrieve()`: Allows reading the stored value.
   - Access control using `Ownable`.

2. **Compilation**:
   - Used Hardhat to compile the contract, generating the ABI and bytecode.

3. **Local Blockchain Deployment**:
   - Deployed to a local Hardhat blockchain for testing.

4. **Unit Testing**:
   - Wrote unit tests using Chai to verify:
     - The owner can store values.
     - The stored value can be retrieved correctly.
     - Unauthorized access to `store` is blocked.

5. **Deployment to Sepolia Network**:
   - Connected to Sepolia using Alchemy as the RPC provider.
   - Deployed the contract using a deployment script.

## Contract Code
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;

    event ValueChanged(uint256 value);

    function store(uint256 value) public onlyOwner {
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}
```

## Deployment Details
### Local Blockchain
- **Tool**: Hardhat 
- **Command**: `npx hardhat run scripts/deploy.js --network localhost`

### Sepolia Testnet
- **Tool**: Hardhat
- **RPC Provider**: Alchemy
- **Command**: `npx hardhat run scripts/deploy.js --network sepolia`

**Deployed Address**: `0x0f6dB6cE855ACA0bd0a5da62a2ECfC8dfdBaDd46` (Sepolia)

Explore the contract on [Etherscan Sepolia](https://sepolia.etherscan.io/address/0x0f6dB6cE855ACA0bd0a5da62a2ECfC8dfdBaDd46).

## Testing
### Test Commands
- **Run Tests**: `npx hardhat test`

### Key Test Cases
- Verify only the owner can call `store`.
- Verify the correct value is retrieved using `retrieve`.
- Ensure unauthorized attempts to call `store` fail.

## Key Learnings
- Solidity development and secure patterns using OpenZeppelin.
- Setting up and interacting with local and testnet blockchains.
- Writing unit tests for smart contract functionality.
- Deploying and verifying contracts on Sepolia using Hardhat and Alchemy.

## Humor Corner
Creating a smart contract may seem simple, but don’t forget — your code is about to live on the blockchain forever. It's like writing your name in wet cement, but much geekier. And remember: deploying on mainnet is where the real adventure begins, so hold on to your ETH and your nerves!

---

## Contributors
- **Mar Sino**: Blockchain developer and author of this project.

Feel free to explore the code and scripts to understand the entire lifecycle of deploying and testing smart contracts on Ethereum!
