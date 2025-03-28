/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Auth,
  AuthInterface,
} from "../../../contracts/access-control/Auth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAdministrator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102cc3803806102cc833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b6101b5806101176000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630a2eb30114610030575b600080fd5b61004a6004803603810190610045919061011c565b610060565b6040516100579190610164565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081359050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b60008115159050919050565b61015e81610149565b82525050565b60006020820190506101796000830184610155565b9291505056fea264697066735822122076ada8fa0bf5aedd2c21ebdfcc369711114ad7c602a8e427359cea826d7e0db164736f6c63430008140033";

type AuthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Auth__factory extends ContractFactory {
  constructor(...args: AuthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    deployer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(deployer, overrides || {});
  }
  override deploy(
    deployer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(deployer, overrides || {}) as Promise<
      Auth & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Auth__factory {
    return super.connect(runner) as Auth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthInterface {
    return new Interface(_abi) as AuthInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Auth {
    return new Contract(address, _abi, runner) as unknown as Auth;
  }
}
