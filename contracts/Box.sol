// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import Ownable from the OpenZeppelin Contracts library
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    constructor() Ownable(msg.sender) {}

    // Stores a new value in the contract
    function store(uint256 value) public onlyOwner {
   
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}