/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Box, BoxInterface } from "../../contracts/Box";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100845760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161007b919061019e565b60405180910390fd5b6100938161009960201b60201c565b506101b9565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101888261015d565b9050919050565b6101988161017d565b82525050565b60006020820190506101b3600083018461018f565b92915050565b6104c0806101c86000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780636057361d1461007a578063715018a6146100965780638da5cb5b146100a0578063f2fde38b146100be575b600080fd5b6100646100da565b604051610071919061035c565b60405180910390f35b610094600480360381019061008f91906103a8565b6100e4565b005b61009e61012d565b005b6100a8610141565b6040516100b59190610416565b60405180910390f35b6100d860048036038101906100d3919061045d565b61016a565b005b6000600154905090565b6100ec6101f0565b806001819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c5981604051610122919061035c565b60405180910390a150565b6101356101f0565b61013f6000610277565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101726101f0565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101e45760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101db9190610416565b60405180910390fd5b6101ed81610277565b50565b6101f861033b565b73ffffffffffffffffffffffffffffffffffffffff16610216610141565b73ffffffffffffffffffffffffffffffffffffffff16146102755761023961033b565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161026c9190610416565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b61035681610343565b82525050565b6000602082019050610371600083018461034d565b92915050565b600080fd5b61038581610343565b811461039057600080fd5b50565b6000813590506103a28161037c565b92915050565b6000602082840312156103be576103bd610377565b5b60006103cc84828501610393565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610400826103d5565b9050919050565b610410816103f5565b82525050565b600060208201905061042b6000830184610407565b92915050565b61043a816103f5565b811461044557600080fd5b50565b60008135905061045781610431565b92915050565b60006020828403121561047357610472610377565b5b600061048184828501610448565b9150509291505056fea2646970667358221220a39b6db8f384ba0fe6d3da6e6d4b58284e5656ca9a9f5206470a676ff0ac4c8d64736f6c634300081c0033";

type BoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Box & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Box__factory {
    return super.connect(runner) as Box__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new Interface(_abi) as BoxInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Box {
    return new Contract(address, _abi, runner) as unknown as Box;
  }
}
